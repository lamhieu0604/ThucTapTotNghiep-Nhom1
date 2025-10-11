import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PhieuThu from "./pages/PhieuThu";
import PhieuChi from "./pages/PhieuChi";
import PhieuNhapKho from "./pages/PhieuNhapKho";


function App() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/PhieuThu" element={<PhieuThu />} />
          <Route path="/PhieuChi" element={<PhieuChi />} />
          <Route path="/PhieuNhapKho" element={<PhieuNhapKho />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
