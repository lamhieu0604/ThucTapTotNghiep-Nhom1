import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col about">
          <h4>Về Thông tư</h4>
          <p>
            Thông tin, biểu mẫu và hướng dẫn liên quan đến quản lý, kế toán hộ
            kinh doanh. Nguồn tham khảo: Thư viện Pháp luật.
          </p>
        </div>

        <div className="footer-col links">
          <h4>Văn bản liên quan</h4>
          <ul>
            <li><a href="/thong-tu/88-2021-tt-btc">Thông tư 88/2021/TT-BTC</a></li>
            <li><a href="/luat-ke-toan-2015">Luật Kế toán 2015</a></li>
            <li><a href="/nghidinh-174-2016">Nghị định 174/2016/NĐ-CP</a></li>
            <li><a href="/mau-chung-tu">Mẫu chứng từ (S1..S6)</a></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Liên hệ</h4>
          <p>Địa chỉ: Hà Nội, Việt Nam</p>
          <p>Email: info@yourdomain.vn</p>
          <p>Điện thoại: 0123 456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} — Hệ thống Quản lý Hộ Kinh Doanh. Bản quyền thuộc về đơn vị phát hành.
        </p>
      </div>
    </footer>
  );
}
