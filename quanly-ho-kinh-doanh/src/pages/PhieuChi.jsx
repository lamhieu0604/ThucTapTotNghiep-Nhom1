import React, { useState } from 'react';
import './PhieuChi.css'; 

// HÀM KIỂM TRA NĂM NHUẬN (Giữ nguyên)
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// HÀM TÍNH SỐ NGÀY TỐI ĐA TRONG THÁNG (Giữ nguyên)
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

// HÀM GIẢ ĐỊNH CHUYỂN ĐỔI SỐ SANG CHỮ (Giữ nguyên)
const convertNumberToVietnameseText = (number) => {
    if (!number || isNaN(number)) return '';
    const billion = Math.floor(number / 1000000000);
    const million = Math.floor((number % 1000000000) / 1000000);
    const remainder = number % 1000000;
    
    let result = '';
    if (billion > 0) result += `${billion} tỷ `;
    if (million > 0) result += `${million} triệu `;
    if (remainder > 0 || (billion === 0 && million === 0)) {
        result += `[...${remainder} đồng...]`; 
    } else if (number > 0) {
        result += ' đồng chẵn';
    }
    if (number === 0 || !number) return ''; 

    return result.trim().charAt(0).toUpperCase() + result.trim().slice(1);
};


const PhieuChi = () => { 
    const [formData, setFormData] = useState({
        hoKinhDoanh: '',
        diaChiHKD: '', 
        ngay: '',
        thang: '',
        nam: '',
        quyenSo: '',
        soPhieu: '',
        hoTenNguoiNhan: '', 
        diaChiNguoiNhan: '',
        lyDoChi: '', 
        soTien: '',
        soTienBangChu: '', 
        chungTuGoc: '',
        xacNhanSoTienBangChu: '' 
    });

    // HÀM XỬ LÝ THAY ĐỔI ĐẦU VÀO (Giữ nguyên)
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newFormData = { ...formData, [name]: value }; 

        // 1. XỬ LÝ CÁC TRƯỜNG CHỈ CÓ SỐ (Ngày/Tháng/Năm)
        if (['ngay', 'thang', 'nam'].includes(name)) {
            const numericValue = value.replace(/\D/g, ''); 
            
            // Cập nhật state với giá trị chỉ có số
            newFormData = { ...formData, [name]: numericValue }; 
            
            // --- LOGIC KIỂM TRA NGÀY THÁNG ---
            if (name === 'thang') {
                const month = parseInt(numericValue, 10);
                if (numericValue !== '' && (month <= 0 || month > 12)) return;
                
                const maxDays = getDaysInMonth(numericValue, formData.nam);
                if (parseInt(formData.ngay, 10) > maxDays) {
                    newFormData.ngay = String(maxDays); 
                }
            }
            
            if (name === 'nam') {
                // FIX: Cho phép nhập, chỉ giới hạn độ dài TỐI ĐA 4 ký tự.
                if (numericValue.length > 4) return;
                
                const maxDays = getDaysInMonth(formData.thang, numericValue);
                if (parseInt(formData.ngay, 10) > maxDays) {
                    newFormData.ngay = String(maxDays);
                }
            }

            if (name === 'ngay') {
                const day = parseInt(numericValue, 10);
                const maxDays = getDaysInMonth(formData.thang, formData.nam);
                // Giới hạn ngày <= 31 và không quá maxDays
                if (numericValue !== '' && (day <= 0 || day > 31 || day > maxDays)) return;
            }
            
        // 2. XỬ LÝ TRƯỜNG SỐ TIỀN
        } else if (name === 'soTien') {
            const numericMoneyValue = value.replace(/[^0-9]/g, ''); 
            const textValue = convertNumberToVietnameseText(parseInt(numericMoneyValue, 10));
            
            newFormData = {
                ...formData,
                [name]: value,
                soTienBangChu: textValue, 
                xacNhanSoTienBangChu: textValue 
            };
            
        // 3. XỬ LÝ CÁC TRƯỜNG KHÁC (Chữ, v.v.)
        } else {
            newFormData = { ...formData, [name]: value };
        }


        setFormData(newFormData);
    };


    // Hàm xử lý khi nhấn nút Lưu/Submit (Giữ nguyên)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { ngay, thang, nam } = formData;
        const iNgay = parseInt(ngay, 10);
        const iThang = parseInt(thang, 10);
        const iNam = parseInt(nam, 10);

        // Kiểm tra tính đầy đủ
        if (!ngay || !thang || !nam) {
            alert("Vui lòng nhập đầy đủ Ngày, Tháng, Năm.");
            return;
        }
        
        // Kiểm tra tính hợp lệ nghiêm ngặt (chỉ kiểm tra ở Submit)
        if (iNam < 1000) { 
            alert("Năm phải là số có 4 chữ số hợp lệ.");
            return;
        }

        const maxDays = getDaysInMonth(iThang, iNam);
        if (iNgay > maxDays) {
            alert(`Ngày/Tháng/Năm không hợp lệ. Tháng ${iThang} năm ${iNam} chỉ có ${maxDays} ngày.`);
            return;
        }

        // Dùng đối tượng Date để tạo timestamp
        const dateCheck = new Date(iNam, iThang - 1, iNgay);
        
        const dataToSend = {
            ma_chung_tu: "Mẫu số 02-TT", 
            ...formData,
            ngay_lap_js: dateCheck 
        };

        try {
            const response = await fetch('http://localhost:5000/api/phieuchi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend), 
            });

            if (response.ok) {
                alert('✅ Lưu Phiếu Chi thành công vào collection phieu_chi!');
            } else {
                const errorData = await response.json();
                alert(`❌ Lỗi khi lưu Phiếu Chi. ${errorData.message || 'Kiểm tra kết nối API.'}`);
            }
        } catch (error) {
            console.error('Lỗi kết nối hoặc xử lý:', error);
            alert('❌ Lỗi kết nối đến máy chủ API. Đảm bảo server Node.js đang chạy.');
        }
    };

    // 4. ĐIỀU CHỈNH NỘI DUNG VÀ NHÃN HIỂN THỊ
    return (
        <div className="app-container">
            <div className="phieu-chi-container"> 
                <form onSubmit={handleSubmit}> 
                    
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
                            <p className="mau-so"><strong>Mẫu số 02 – TT</strong></p> 
                            <p className="ban-hanh">(Ban hành kèm theo Thông tư số 88/2021/TT-BTC...)</p>
                        </div>
                    </div>

                    <h1 className="tieu-de">PHIẾU CHI</h1> 

                    <div className="phieu-thu-details">
                        <div className="row">
                            {/* DÒNG 1: NGÀY THÁNG NĂM (ĐẦU PHIẾU) */}
                            <p>
                                Ngày <input type="text" name="ngay" value={formData.ngay} onChange={handleChange} className="input-date" placeholder=".." /> 
                                tháng <input type="text" name="thang" value={formData.thang} onChange={handleChange} className="input-date" placeholder=".." /> 
                                năm <input type="text" name="nam" value={formData.nam} onChange={handleChange} className="input-year-header" placeholder="...." /> 
                            </p>
                            <p>
                                Quyển số: <input type="text" name="quyenSo" value={formData.quyenSo} onChange={handleChange} className="input-small" placeholder="........." />
                            </p>
                        </div>
                        <div className="row">
                            <p></p> 
                            <p>
                                Số: <input type="text" name="soPhieu" value={formData.soPhieu} onChange={handleChange} className="input-small" placeholder="........." />
                            </p>
                        </div>
                        
                        <p className="single-line-field">Họ và tên người nhận tiền: <input type="text" name="hoTenNguoiNhan" value={formData.hoTenNguoiNhan} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" /></p>
                        <p className="single-line-field">Địa chỉ: <input type="text" name="diaChiNguoiNhan" value={formData.diaChiNguoiNhan} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" /></p>
                        <p className="single-line-field">Lý do chi: <input type="text" name="lyDoChi" value={formData.lyDoChi} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" /></p>
                        
                        <p className="single-line-field">
                            Số tiền: 
                            <input 
                                type="text" 
                                name="soTien" 
                                value={formData.soTien} 
                                onChange={handleChange} 
                                className="input-medium" 
                                placeholder="................" 
                            /> 
                            (Viết bằng chữ): 
                            <input 
                                type="text" 
                                name="soTienBangChu" 
                                value={formData.soTienBangChu} 
                                onChange={handleChange} 
                                className="input-long" 
                                placeholder="................................................................................................................................" 
                                readOnly // Thường để trường này là chỉ đọc
                            />
                        </p>
                        <p className="single-line-field">Kèm theo: <input type="text" name="chungTuGoc" value={formData.chungTuGoc} onChange={handleChange} className="input-full" placeholder="................................................................................................................................" /> Chứng từ gốc:</p>
                    </div>

                    <div className="phieu-thu-footer">
                        {/* ✅ ĐÃ CHỈNH SỬA: Bỏ dấu ** (in đậm) */}
                        <div className="date-place-display-right"> 
                            <p>
                                Ngày {formData.ngay} tháng {formData.thang} năm {formData.nam}
                            </p>
                        </div>
                        
                        <div className="signatures">
                            <div className="col"><p><strong>NGƯỜI ĐẠI DIỆN HỘ KINH DOANH/...</strong></p><p>(Ký, họ tên, đóng dấu)</p></div>
                            <div className="col"><p><strong>NGƯỜI LẬP BIỂU</strong></p><p>(Ký, họ tên)</p></div>
                            <div className="col"><p><strong>NGƯỜI NHẬN TIỀN</strong></p><p>(Ký, họ tên)</p></div> 
                            <div className="col"><p><strong>THỦ QUỸ</strong></p><p>(Ký, họ tên)</p></div>
                        </div>
                        
                        <div className="receipt-confirmation">
                            <p>
                                Đã nhận đủ số tiền (viết bằng chữ): 
                                <input 
                                    type="text" 
                                    name="xacNhanSoTienBangChu" 
                                    value={formData.xacNhanSoTienBangChu}
                                    onChange={handleChange} 
                                    className="input-full"
                                    placeholder="................................................................................................................................"
                                    readOnly // Thường để trường này là chỉ đọc
                                />
                            </p>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Lưu Phiếu Chi</button>
                </form>
            </div>
        </div>
    );
};

export default PhieuChi;