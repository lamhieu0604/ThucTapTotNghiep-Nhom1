// server.js (ĐÃ CẬP NHẬT)
const express = require("express");
const cors = require("cors");
const { connectToMongo, getDb } = require("./db"); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB khi server start
connectToMongo()
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Import và sử dụng route cho Phiếu Thu (giữ nguyên)
const phieuThuRoutes = require("./routes/phieuThuRoutes");
app.use("/api/phieuthu", phieuThuRoutes);

// Import và sử dụng route MỚI cho Phiếu Chi
const phieuChiRoutes = require("./routes/phieuChiRoutes");
app.use("/api/phieuchi", phieuChiRoutes); // Dùng endpoint mà React đang gọi

const phieuNhapKhoRoutes = require("./routes/phieuNhapKhoRoutes");
app.use("/api/phieunhapkho", phieuNhapKhoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});