import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // import file CSS riêng

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Từ khóa tìm kiếm:", search);
  };

  return (
    <header className="header">
      <h2 className="header-title">Hệ thống Quản lý Hộ Kinh Doanh</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Tìm
        </button>
      </form>

      <div className="user-info">
        <span>Xin chào!</span>
        <button className="logout-btn" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </header>
  );
}

export default Header;
