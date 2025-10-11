import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="navbar">
      {/* Menu 1 */}
      <div className="dropdown">
        <Link to="/" className="dropbtn">
          Trang chủ
        </Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Các chứng từ quy định tại Thông tư này ▾
        </button>
        <div className="dropdown-content">
          <Link to="/PhieuThu">Phiếu thu</Link>
          <Link to="/PhieuChi">Phiếu chi</Link>
          <Link to="/PhieuNhapKho">Phiếu nhập kho</Link>
          <Link to="/PhieuXuatKho">Phiếu xuất kho</Link>
          <Link to="/BangLuong">Bảng thanh toán tiền lương</Link>
          <Link to="/ThuNhapNhanVien">
            Các khoản thu nhập của người lao động
          </Link>
        </div>
      </div>

      {/* Menu 2 */}
      <div className="dropdown">
        <button className="dropbtn">
          Các chứng từ quy định theo luật pháp khác ▾
        </button>
        <div className="dropdown-content">
          <Link to="/HoaDon">Hóa đơn</Link>
          <Link to="/GiayNopTienNSNN">Giấy nộp tiền vào NSNN</Link>
          <Link to="/GiayBaoNganHang">
            Giấy báo Nợ, Giấy báo Có của ngân hàng
          </Link>
          <Link to="/UyNhiemChi">Ủy nhiệm chi</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Sổ kế toán ▾
        </button>
        <div className="dropdown-content">
          <Link to="/HoaDon">Sổ chi tiết doanh thu bán hàng hóa, dịch vụ</Link>
          <Link to="/GiayNopTienNSNN">Sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa</Link>
          <Link to="/GiayBaoNganHang">
            Sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN
          </Link>
          <Link to="/UyNhiemChi">Sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động</Link>
          <Link to="/UyNhiemChi">Sổ quỹ tiền mặt</Link>
          <Link to="/UyNhiemChi">Sổ tiền gửi ngân hàng</Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
