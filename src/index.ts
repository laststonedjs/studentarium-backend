const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const pool = require("./db/pool");
import { Request, Response } from "express";
import { authMiddleware } from "./middleware/authMiddleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Database connection failed");
  }
});

app.get("/api/protected", authMiddleware, (req: any, res: Response) => {
  res.json({
    message: "Access granted!",
    user: req.user, // will be here { id, email }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));