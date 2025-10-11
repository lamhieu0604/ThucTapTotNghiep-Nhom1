// routes/phieuNhapKhoRoutes.js

const express = require('express');
const { getDb } = require('../db'); // Import hàm getDb
const router = express.Router();

// HÀM KIỂM TRA NĂM NHUẬN (Duplicated from client for safety)
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// HÀM TÍNH SỐ NGÀY TỐI ĐA TRONG THÁNG (Duplicated from client for safety)
const getDaysInMonth = (thang, nam) => {
    const iThang = parseInt(thang, 10);
    const iNam = parseInt(nam, 10);

    if (isNaN(iThang) || iThang < 1 || iThang > 12) return 31; 
    if (iThang === 2) {
        return isLeapYear(iNam) ? 29 : 28;
    }
    if ([4, 6, 9, 11].includes(iThang)) {
        return 30;
    }
    return 31;
};

/**
 * Hàm chuẩn hóa và kiểm tra tính hợp lệ của ngày tháng năm
 * @param {string} ngay - Ngày
 * @param {string} thang - Tháng
 * @param {string} nam - Năm
 * @param {string} tenTruong - Tên trường ngày tháng để hiển thị lỗi
 * @returns {object} {isValid: boolean, value: {iNgay, iThang, iNam}, message: string}
 */
const validateDate = (ngay, thang, nam, tenTruong) => {
    const iNgay = parseInt(ngay, 10) || 0; 
    const iThang = parseInt(thang, 10) || 0;
    const iNam = parseInt(nam, 10) || 0;

    if (!ngay || !thang || !nam || iNgay <= 0 || iThang <= 0 || iThang > 12 || iNam < 1000 || isNaN(iNgay) || isNaN(iThang) || isNaN(iNam)) {
        return { 
            isValid: false, 
            message: `Lỗi dữ liệu (${tenTruong}): Vui lòng nhập đầy đủ và chính xác Ngày, Tháng, Năm (Năm phải >= 1000).`
        };
    }
    
    const maxDays = getDaysInMonth(iThang, iNam);
    if (iNgay > maxDays) {
        return { 
            isValid: false, 
            message: `Lỗi dữ liệu (${tenTruong}): Tháng ${iThang} năm ${iNam} chỉ có ${maxDays} ngày. Ngày ${iNgay} không hợp lệ.`
        };
    }
    
    return {
        isValid: true,
        value: { iNgay, iThang, iNam }
    };
};


// Định nghĩa POST route cho Phiếu Nhập Kho
router.post('/', async (req, res) => {
    const data = req.body; 
    
    // ------------------------------------------
    // 💥 1. SERVER-SIDE VALIDATION (Kiểm tra Ngày/Tháng/Năm)
    // ------------------------------------------
    
    // 1.1. Ngày lập phiếu
    const datePhieu = validateDate(data.ngay, data.thang, data.nam, "Ngày lập phiếu");
    if (!datePhieu.isValid) {
        return res.status(400).json({ message: datePhieu.message });
    }
    const { iNgay, iThang, iNam } = datePhieu.value;
    
    // 1.2. Ngày chứng từ gốc (tùy chọn, nhưng nếu có phải hợp lệ)
    let dateChungTu = { isValid: true, value: { iNgay: 0, iThang: 0, iNam: 0 } };
    if (data.ngayChungTu || data.thangChungTu || data.namChungTu) {
         dateChungTu = validateDate(data.ngayChungTu, data.thangChungTu, data.namChungTu, "Ngày chứng từ gốc");
         if (!dateChungTu.isValid) {
             return res.status(400).json({ message: dateChungTu.message });
         }
    }
    const { iNgay: iNgayCT, iThang: iThangCT, iNam: iNamCT } = dateChungTu.value;

    // ------------------------------------------
    // 2. CHUẨN BỊ DOCUMENT ĐỂ INSERT VÀO MONGODB
    // ------------------------------------------
    
    // 2.1. Chuẩn hóa chi tiết hàng hóa (chuyển số lượng/đơn giá/thành tiền sang kiểu Number)
    const normalizedGoodsList = (data.goodsList || []).map(item => {
        // Loại bỏ ký tự không phải số và chuyển sang Number
        const slChungTu = parseInt(item.slChungTu.replace(/[^0-9]/g, ''), 10) || 0;
        const slThucNhap = parseInt(item.slThucNhap.replace(/[^0-9]/g, ''), 10) || 0;
        const donGia = parseFloat(item.donGia.replace(/[^0-9.]/g, '')) || 0;
        const thanhTien = slThucNhap * donGia; // Tính lại ở server để đảm bảo an toàn
        
        return {
            "stt": item.stt,
            "ten_nhan_hieu_quy_cach": item.ten,
            "ma_so": item.maSo,
            "don_vi_tinh": item.dvt,
            "so_luong": {
                "theo_chung_tu": slChungTu,
                "thuc_nhap": slThucNhap,
            },
            "don_gia": donGia,
            "thanh_tien": thanhTien
        };
    });
    
    // 2.2. Tính tổng số tiền cuối cùng ở Server
    const tongSoTien = normalizedGoodsList.reduce((sum, item) => sum + item.thanhTien, 0);
    
    const phieuNhapKhoDocument = {
        "ma_chung_tu": "Mẫu số 03-VT",
        "thong_tin_hkd": {
            "ten": data.hoKinhDoanh, 
            "dia_chi": data.diaChiHKD 
        },
        "thong_tin_phieu": {
            "ngay": iNgay, 
            "thang": iThang, 
            "nam": iNam, 
            "so_phieu": data.soPhieu
        },
        "nguoi_giao_hang": {
            "ho_ten": data.hoTenNguoiGiao,
            "theo_so": data.soChungTu,
            "ngay_chung_tu": {
                "ngay": iNgayCT,
                "thang": iThangCT,
                "nam": iNamCT
            },
            "cua_don_vi": data.cuaDonVi
        },
        "dia_diem_nhap_kho": data.diaDiemNhapKho,
        "chi_tiet_hang_hoa": normalizedGoodsList,
        "tong_ket": {
            "tong_so_tien": tongSoTien,
            "tong_so_tien_bang_chu": data.soTienBangChu, // Lấy từ client, nhưng nên có hàm convert ở server
            "so_chung_tu_goc_kem_theo": data.soChungTuGoc
        },
        "ngay_ky": { 
            "ngay": iNgay,
            "thang": iThang,
            "nam": iNam
        },
        "ngay_tao": new Date() 
    };

    try {
        const db = getDb();
        
        // 3. THỰC HIỆN LỆNH INSERT (collection là phieu_nhap_kho)
        const result = await db.collection("phieu_nhap_kho").insertOne(phieuNhapKhoDocument);

        res.status(201).json({ 
            message: "Phiếu Nhập Kho đã được lưu thành công!", 
            insertedId: result.insertedId 
        });

    } catch (error) {
        console.error("Lỗi khi lưu Phiếu Nhập Kho:", error);
        res.status(500).json({ 
            message: "Lỗi Server nội bộ khi lưu dữ liệu",
            error: error.toString() 
        });
    }
});

module.exports = router;