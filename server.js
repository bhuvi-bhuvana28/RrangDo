const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();


// ✅ MIDDLEWARE
app.use(express.json());
app.use(cors());

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// ✅ DATABASE CONNECTION
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("DB Error ❌", err);
    } else {
        console.log("Database Connected ✅");
    }
});

// ===============================
// TEST API
// ===============================
app.get("/api/test", (req, res) => {
  res.json({ message: "Server working 🚀" });
});

// ===============================
// CREATE ORDER
// ===============================
app.post("/create_order", (req, res) => {
  const { total, address, items } = req.body;

  db.query(
    "INSERT INTO orders (total, status, address, items) VALUES (?, ?, ?, ?)",
    [total, "Pending", JSON.stringify(address), JSON.stringify(items)],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Order Created ✅" });
    }
  );
});

// ===============================
// GET ORDERS
// ===============================
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, rows) => {
    if (err) return res.status(500).json(err);

    const result = rows.map(row => ({
      id: row.id,
      total: row.total,
      status: row.status,
      address: JSON.parse(row.address || "{}"),
      items: JSON.parse(row.items || "[]")
    }));

    res.json(result);
  });
});

// ===============================
// SAVE ADDRESS
// ===============================
// ===============================
// SAVE ADDRESS
// ===============================
app.post("/save_address", (req, res) => {

  const {

    name,
    phone,
    pincode,
    house,
    area,
    city,
    state

  } = req.body;

  db.query(

    `INSERT INTO addresses
    (name, phone, pincode, house,
    area, city, state)

    VALUES (?, ?, ?, ?, ?, ?, ?)`,

    [
      name,
      phone,
      pincode,
      house,
      area,
      city,
      state
    ],

    (err) => {

      if(err){
        return res.status(500).json(err);
      }

      res.json({
        message: "Address saved ✅"
      });

    }
  );

});
// ===============================
// GET ADDRESSES
// ===============================
app.get("/get_addresses", (req, res) => {
  db.query("SELECT * FROM addresses", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ===============================
// UPDATE STATUS
// ===============================
app.post("/update_status", (req, res) => {

  const { order_id, status } = req.body;

  db.query(
    "UPDATE orders SET status=? WHERE id=?",
    [status, order_id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Updated ✅" });
    }
  );
});
// ===============================
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});