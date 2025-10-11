import React, { useState, useEffect } from 'react';
import './PhieuNhapKho.css'; 

// HÀM KIỂM TRA NĂM NHUẬN
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// HÀM TÍNH SỐ NGÀY TỐI ĐA TRONG THÁNG
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

// HÀM GIẢ ĐỊNH CHUYỂN ĐỔI SỐ SANG CHỮ
const convertNumberToVietnameseText = (number) => {
    if (!number || isNaN(number) || number === 0) return 'Không đồng';
    
    const parts = [];
    let temp = Math.floor(number);

    // Xử lý các phần lớn (tỷ, triệu)
    const billion = Math.floor(temp / 1000000000);
    temp %= 1000000000;
    if (billion > 0) parts.push(`${billion} tỷ`);

    const million = Math.floor(temp / 1000000);
    temp %= 1000000;
    if (million > 0) parts.push(`${million} triệu`);

    const thousand = Math.floor(temp / 1000);
    temp %= 1000;
    if (thousand > 0) parts.push(`${thousand} nghìn`);

    if (temp > 0 || (number > 0 && parts.length === 0)) {
        parts.push(`${temp} đồng`); 
    }
    
    const result = parts.join(' ').trim() + ' chẵn';
    return result.charAt(0).toUpperCase() + result.slice(1);
};

// CẤU TRÚC DỮ LIỆU CỦA MỘT DÒNG HÀNG HÓA TRONG BẢNG
const initialGoodsRow = {
    stt: 1,
    ten: '',
    maSo: '',
    dvt: '',
    slChungTu: '',
    slThucNhap: '',
    donGia: '',
    thanhTien: 0
};


const PhieuNhapKho = () => { 
    const [formData, setFormData] = useState({
        hoKinhDoanh: '',
        diaChiHKD: '', 
        ngay: '',
        thang: '',
        nam: '',
        soPhieu: '',
        hoTenNguoiGiao: '', 
        soChungTu: '',
        ngayChungTu: '', 
        thangChungTu: '', 
        namChungTu: '', 
        cuaDonVi: '',
        diaDiemNhapKho: '',
        soChungTuGoc: ''
    });

    const [goodsList, setGoodsList] = useState([initialGoodsRow]);
    const [tongSoTien, setTongSoTien] = useState(0);

    // Tính lại Tổng số tiền khi goodsList thay đổi
    useEffect(() => {
        const total = goodsList.reduce((sum, item) => sum + item.thanhTien, 0);
        setTongSoTien(total);
    }, [goodsList]);

    // HÀM XỬ LÝ THAY ĐỔI ĐẦU VÀO CHUNG
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newFormData = { ...formData, [name]: value }; 

        // 1. XỬ LÝ CÁC TRƯỜNG CHỈ CÓ SỐ (Ngày/Tháng/Năm)
        if (['ngay', 'thang', 'nam', 'ngayChungTu', 'thangChungTu', 'namChungTu'].includes(name)) {
            const numericValue = value.replace(/\D/g, ''); 
            newFormData = { ...formData, [name]: numericValue }; 
        }

        setFormData(newFormData);
    };
    
    // HÀM XỬ LÝ THAY ĐỔI DỮ LIỆU TRONG BẢNG
    const handleGoodsChange = (index, field, value) => {
        const newGoodsList = goodsList.map((item, i) => {
            if (i === index) {
                let updatedItem = { ...item, [field]: value };
                
                // Cập nhật Thành tiền
                if (['slThucNhap', 'donGia'].includes(field)) {
                    // Cần xử lý cả dấu phẩy/chấm nếu có trong input đơn giá để tính đúng
                    const sl = parseFloat(updatedItem.slThucNhap.replace(/[^0-9]/g, '')) || 0;
                    const dg = parseFloat(updatedItem.donGia.replace(/[^0-9]/g, '')) || 0;
                    updatedItem.thanhTien = sl * dg;
                }
                
                // Chuẩn hóa STT
                updatedItem.stt = i + 1;
                
                return updatedItem;
            }
            return item;
        });
        setGoodsList(newGoodsList);
    };

    // THÊM MỘT DÒNG HÀNG HÓA MỚI
    const addGoodsRow = () => {
        const newRow = { ...initialGoodsRow, stt: goodsList.length + 1 };
        setGoodsList([...goodsList, newRow]);
    };

    // XÓA MỘT DÒNG HÀNG HÓA
    const removeGoodsRow = (index) => {
        if (goodsList.length > 0) { // Sửa lỗi nếu goodsList rỗng
            const newGoodsList = goodsList.filter((_, i) => i !== index)
                                         .map((item, i) => ({ ...item, stt: i + 1 }));
            setGoodsList(newGoodsList);
        }
    };
    
    // XỬ LÝ SUBMIT (ĐÃ CẬP NHẬT)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 1. CLIENT-SIDE VALIDATION CƠ BẢN (Ngày/Tháng/Năm lập phiếu)
        const iNgay = parseInt(formData.ngay, 10); 
        const iThang = parseInt(formData.thang, 10);
        const iNam = parseInt(formData.nam, 10);

        if (isNaN(iNgay) || isNaN(iThang) || isNaN(iNam) || iNgay <= 0 || iThang <= 0 || iThang > 12 || iNam < 1000) {
            alert("Lỗi: Vui lòng nhập đầy đủ và chính xác Ngày, Tháng, Năm lập phiếu.");
            return;
        }
        const maxDays = getDaysInMonth(iThang, iNam);
        if (iNgay > maxDays) {
            alert(`Lỗi: Tháng ${iThang} năm ${iNam} chỉ có ${maxDays} ngày. Ngày ${iNgay} không hợp lệ.`);
            return;
        }
        
        // Tạo timestamp cho ngày lập phiếu
        const ngayLapPhieu = new Date(iNam, iThang - 1, iNgay);

        // 2. CHUẨN BỊ DỮ LIỆU GỬI ĐI
        // Thay vì định dạng theo Schema, ta gửi dữ liệu phẳng để Express Router tự chuẩn hóa (như đã thảo luận)
        const dataToSend = {
            // Gộp tất cả các trường formData
            ...formData, 
            // Thêm các state phức tạp
            goodsList: goodsList,
            tongSoTien: tongSoTien,
            soTienBangChu: convertNumberToVietnameseText(tongSoTien),
            ngay_lap_js: ngayLapPhieu, // Thêm ngày dưới dạng Date object
            ma_chung_tu: "Mẫu số 03-VT",
        };
        
        // 3. THỰC HIỆN FETCH API THỰC TẾ
        try {
            const response = await fetch('http://localhost:5000/api/phieunhapkho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend), // Gửi đối tượng dataToSend
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Response từ Server:", result);
                alert(`✅ Phiếu Nhập Kho đã được lưu thành công! ID: ${result.insertedId}`);
                // Bạn có thể reset form ở đây:
                // setFormData({ ... });
                // setGoodsList([initialGoodsRow]);
            } else {
                // Lỗi 400 (Bad Request) hoặc 500 (Internal Server Error)
                console.error("Lỗi Server:", result);
                alert(`❌ Lỗi khi lưu phiếu: ${result.message || 'Lỗi không xác định từ Server. Kiểm tra console để biết chi tiết.'}`);
            }

        } catch (error) {
            console.error("Lỗi kết nối:", error);
            alert('❌ Lỗi kết nối đến Server. Vui lòng kiểm tra Server đã chạy chưa và URL đã đúng chưa.');
        }
    };

    
    return (
        <div className="app-container">
            <div className="phieu-nhap-kho-container"> 
                <form onSubmit={handleSubmit}> 
                    
                    {/* PHẦN HEADER */}
                    <div className="phieu-thu-header">
                        <div className="info-left">
                            <p>
                                <strong>HỘ, CÁ NHÂN KINH DOANH:</strong>
                                <input type="text" name="hoKinhDoanh" value={formData.hoKinhDoanh} onChange={handleChange} className="input-field-full" placeholder="......................................................"/>
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong>
                                <input type="text" name="diaChiHKD" value={formData.diaChiHKD} onChange={handleChange} className="input-field-full" placeholder="......................................................"/>
                            </p>
                        </div>
                        <div className="info-right">
                            <p className="mau-so"><strong>Mẫu số 03 – VT</strong></p> 
                            <p className="ban-hanh">(Ban hành kèm theo Thông tư số 88/2021/TT-BTC ngày 11 tháng 10 năm 2021 của Bộ trưởng Bộ Tài chính)</p>
                        </div>
                    </div>

                    <h1 className="tieu-de">PHIẾU NHẬP KHO</h1> 

                    {/* DÒNG NGÀY THÁNG SỐ */}
                    <div className="phieu-thu-details">
                        <div className="row">
                            <p>
                                Ngày <input type="text" name="ngay" value={formData.ngay} onChange={handleChange} className="input-date" placeholder=".." /> 
                                tháng <input type="text" name="thang" value={formData.thang} onChange={handleChange} className="input-date" placeholder=".." /> 
                                năm <input type="text" name="nam" value={formData.nam} onChange={handleChange} className="input-year-header" placeholder="...." /> 
                            </p>
                            <p>
                                Số: <input type="text" name="soPhieu" value={formData.soPhieu} onChange={handleChange} className="input-small" placeholder="........." />
                            </p>
                        </div>
                        
                        {/* CHI TIẾT GIAO HÀNG */}
                        <p className="single-line-field">- Họ và tên người giao hàng: 
                            <input type="text" name="hoTenNguoiGiao" value={formData.hoTenNguoiGiao} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" />
                        </p>
                        
                        <p className="single-line-field">- Theo số: 
                            <input type="text" name="soChungTu" value={formData.soChungTu} onChange={handleChange} className="input-small" placeholder="........." /> ngày 
                            <input type="text" name="ngayChungTu" value={formData.ngayChungTu} onChange={handleChange} className="input-date" placeholder=".." /> tháng 
                            <input type="text" name="thangChungTu" value={formData.thangChungTu} onChange={handleChange} className="input-date" placeholder=".." /> năm 
                            <input type="text" name="namChungTu" value={formData.namChungTu} onChange={handleChange} className="input-year-header" placeholder="...." /> của 
                            <input type="text" name="cuaDonVi" value={formData.cuaDonVi} onChange={handleChange} className="input-medium" placeholder="........................." />
                        </p>
                        
                        <p className="single-line-field">- Địa điểm nhập kho: 
                            <input type="text" name="diaDiemNhapKho" value={formData.diaDiemNhapKho} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" />
                        </p>

                        {/* BẢNG CHI TIẾT HÀNG HÓA */}
                        <table className="goods-table">
                            <thead>
                                <tr>
                                    <th rowSpan="2" className="col-stt">STT<p>A</p></th>
                                    <th rowSpan="2" className="col-ten">Tên, nhãn hiệu, quy cách, phẩm chất vật liệu, dụng cụ, sản phẩm, hàng hóa<p>B</p></th>
                                    <th rowSpan="2" className="col-ma">Mã số<p>C</p></th>
                                    <th rowSpan="2" className="col-dvt">Đơn vị tính<p>D</p></th>
                                    <th colSpan="2">Số lượng</th>
                                    <th rowSpan="2" className="col-dg">Đơn giá<p>3</p></th>
                                    <th rowSpan="2" className="col-tt">Thành tiền<p>4</p></th>
                                    <th rowSpan="2" style={{width: '20px'}}></th> {/* Cột nút xóa */}
                                </tr>
                                <tr>
                                    <th className="col-sl-ct">Theo chứng từ<p>1</p></th>
                                    <th className="col-sl-nhap">Thực nhập<p>2</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {goodsList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.stt}</td>
                                        <td><input type="text" value={item.ten} onChange={(e) => handleGoodsChange(index, 'ten', e.target.value)} /></td>
                                        <td><input type="text" value={item.maSo} onChange={(e) => handleGoodsChange(index, 'maSo', e.target.value)} /></td>
                                        <td><input type="text" value={item.dvt} onChange={(e) => handleGoodsChange(index, 'dvt', e.target.value)} /></td>
                                        <td><input type="text" value={item.slChungTu} onChange={(e) => handleGoodsChange(index, 'slChungTu', e.target.value.replace(/[^0-9]/g, ''))} /></td>
                                        <td><input type="text" value={item.slThucNhap} onChange={(e) => handleGoodsChange(index, 'slThucNhap', e.target.value.replace(/[^0-9]/g, ''))} /></td>
                                        <td><input type="text" value={item.donGia} onChange={(e) => handleGoodsChange(index, 'donGia', e.target.value)} /></td>
                                        <td className="total-amount">{item.thanhTien.toLocaleString('vi-VN')}</td>
                                        <td>
                                            <button type="button" onClick={() => removeGoodsRow(index)} style={{ padding: '2px 5px' }}>-</button>
                                        </td>
                                    </tr>
                                ))}
                                {/* Nút thêm dòng */}
                                <tr>
                                    <td colSpan="9" style={{ border: 'none', textAlign: 'center' }}>
                                        <button type="button" onClick={addGoodsRow} style={{ padding: '5px 10px' }}>+ Thêm dòng</button>
                                    </td>
                                </tr>
                                
                                {/* DÒNG CỘNG/TỔNG KẾT */}
                                <tr className="row-summary">
                                    <td colSpan="5" className="total-label">Cộng</td>
                                    <td>X</td>
                                    <td>X</td>
                                    <td className="total-amount">{tongSoTien.toLocaleString('vi-VN')}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        {/* DÒNG KẾT LUẬN */}
                        <p className="single-line-field">- Tổng số tiền (viết bằng chữ): 
                            <input 
                                type="text" 
                                value={convertNumberToVietnameseText(tongSoTien)} 
                                className="input-full" 
                                readOnly 
                                placeholder="................................................................................................................................"
                            />
                        </p>
                        <p className="single-line-field">- Số chứng từ gốc kèm theo: 
                            <input type="text" name="soChungTuGoc" value={formData.soChungTuGoc} onChange={handleChange} className="input-small" placeholder="........." />
                        </p>
                    </div>

                    {/* PHẦN CHỮ KÝ */}
                    <div className="phieu-thu-footer">
                        {/* Ngày ký */}
                        <div className="date-place-display-right"> 
                            <p>
                                Ngày {formData.ngay} tháng {formData.thang} năm {formData.nam}
                            </p>
                        </div>
                        
                        <div className="signatures">
                            <div className="col"><p><strong>NGƯỜI GIAO HÀNG</strong></p><p>(Ký, họ tên)</p></div>
                            <div className="col"><p><strong>THỦ KHO</strong></p><p>(Ký, họ tên)</p></div>
                            <div className="col"><p><strong>NGƯỜI LẬP BIỂU</strong></p><p>(Ký, họ tên)</p></div>
                            <div className="col"><p><strong>NGƯỜI ĐẠI DIỆN HỘ KINH DOANH/ CÁ NHÂN KINH DOANH</strong></p><p>(Ký, họ tên)</p></div>
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-button">Lưu Phiếu Nhập Kho</button>
                </form>
            </div>
        </div>
    );
};

export default PhieuNhapKho;