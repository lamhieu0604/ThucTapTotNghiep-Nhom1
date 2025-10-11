// routes/phieuChiRoutes.js

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

// Định nghĩa POST route cho Phiếu Chi
router.post('/', async (req, res) => {
    const data = req.body; 
    
    // ------------------------------------------
    // 💥 1. SERVER-SIDE VALIDATION (Kiểm tra Ngày/Tháng/Năm) - CẬP NHẬT XỬ LÝ SỐ
    // ------------------------------------------
    // Sử dụng || 0 để đảm bảo rằng nếu parseInt trả về NaN (ví dụ: data.ngay là ''), giá trị sẽ là 0.
    const iNgay = parseInt(data.ngay, 10) || 0; 
    const iThang = parseInt(data.thang, 10) || 0;
    const iNam = parseInt(data.nam, 10) || 0;

    // Kiểm tra tính đầy đủ và giá trị cơ bản (Bao gồm cả việc iNam = 0 khi người dùng chưa nhập gì)
    if (!data.ngay || !data.thang || !data.nam || iNgay <= 0 || iThang <= 0 || iThang > 12 || iNam < 1000 || isNaN(iNgay) || isNaN(iThang) || isNaN(iNam)) {
        return res.status(400).json({ 
            message: "Lỗi dữ liệu: Vui lòng nhập đầy đủ và chính xác Ngày, Tháng, Năm (Năm phải >= 1000)." 
        });
    }

    // Kiểm tra số ngày tối đa của tháng (có tính năm nhuận)
    const maxDays = getDaysInMonth(iThang, iNam);
    if (iNgay > maxDays) {
        return res.status(400).json({ 
            message: `Lỗi dữ liệu: Tháng ${iThang} năm ${iNam} chỉ có ${maxDays} ngày. Ngày ${iNgay} không hợp lệ.` 
        });
    }

    // ------------------------------------------
    // 2. CHUẨN BỊ DOCUMENT ĐỂ INSERT VÀO MONGODB
    // ------------------------------------------
    const phieuChiDocument = {
        "ma_chung_tu": data.ma_chung_tu || "Mẫu số 02-TT",
        "thong_tin_hkd": {
            "ten": data.hoKinhDoanh, 
            "dia_chi": data.diaChiHKD 
        },
        "thong_tin_phieu": {
            "ngay": iNgay, // Đã parse sang số
            "thang": iThang, // Đã parse sang số
            "nam": iNam, // Đã parse sang số
            "quyen_so": data.quyenSo,
            "so_phieu": data.soPhieu
        },
        "nghiep_vu": {
            "ho_ten_nguoi_nhan": data.hoTenNguoiNhan,
            "dia_chi_nguoi_nhan": data.diaChiNguoiNhan,
            "ly_do_chi": data.lyDoChi,
            "so_tien": data.soTien,
            "so_tien_bang_chu": data.soTienBangChu,
            "chung_tu_goc_kem_theo": data.chungTuGoc
        },
        "xac_nhan_thu_quy": {
            "so_tien_bang_chu_thu_quy": data.xacNhanSoTienBangChu
        },
        "ngay_lap_phieu": { 
            "ngay": iNgay,
            "thang": iThang,
            "nam": iNam
        },
        "ngay_tao": new Date() 
    };

    try {
        const db = getDb();
        
        // 3. THỰC HIỆN LỆNH INSERT (collection là phieu_chi)
        const result = await db.collection("phieu_chi").insertOne(phieuChiDocument);

        res.status(201).json({ 
            message: "Phiếu Chi đã được lưu thành công!", 
            insertedId: result.insertedId 
        });

    } catch (error) {
        console.error("Lỗi khi lưu Phiếu Chi:", error);
        res.status(500).json({ 
            message: "Lỗi Server nội bộ khi lưu dữ liệu",
            error: error.toString() 
        });
    }
});

module.exports = router;