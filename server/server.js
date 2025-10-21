import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

const { Pool } = pkg;
const app = express();

// Cho phép gọi từ domain Static Site của bạn:
app.use(cors({ origin: process.env.ALLOW_ORIGIN || "*" }));
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSL === "disable" ? false : { rejectUnauthorized: false },
});

// API demo
app.get("/api/books", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT id, title, author, year FROM books ORDER BY id");
    res.json({ ok: true, data: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "DB query failed" });
  }
});

app.get("/healthz", (_req, res) => res.send("ok"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server on :" + PORT));
