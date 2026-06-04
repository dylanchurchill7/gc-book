const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "golfcourse",
  user: "dylanchurchill",
  password: "",
});

app.get("/", (req, res) => {
  res.send("Hello From Dylan");
});

app.get("/api/courses", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM courses ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
