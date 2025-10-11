// routes/phieuThuRoutes.js
const express = require("express");
const router = express.Router();
const { getDb } = require("../db");

// POST: lưu phiếu thu
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection("phieu_thu");

    const data = {
      ma_chung_tu: req.body.ma_chung_tu,
      thong_tin_hkd: {
        ten: req.body.hoKinhDoanh,
        dia_chi: req.body.diaChi
      },
      thong_tin_phieu: {
        ngay: req.body.ngay,
        thang: req.body.thang,
        nam: req.body.nam,
        quyen_so: req.body.quyenSo,
        so_phieu: req.body.soPhieu
      },
      nghiep_vu: {
        ho_ten_nguoi_nop: req.body.hoTenNguoiNop,
        dia_chi_nguoi_nop: req.body.diaChiNop,
        ly_do_nop: req.body.lyDoNop,
        so_tien: req.body.soTien,
        so_tien_bang_chu: req.body.soTienBangChu,
        chung_tu_goc_kem_theo: req.body.chungTuGoc
      },
      xac_nhan_tien_mat: {
        so_tien_bang_chu_thu_quy: req.body.xacNhanSoTienBangChu
      },
      ngay_tao: new Date()
    };

    const result = await collection.insertOne(data);
    res.status(200).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: lấy tất cả phiếu thu
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection("phieu_thu");
    const docs = await collection.find({}).toArray();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
