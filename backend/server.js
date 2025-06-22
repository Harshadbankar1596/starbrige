import express, { urlencoded } from "express";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "./public/peopalData.json");

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// 🏠 Home
app.get("/", (req, res) => {
  res.sendFile("./public/index.html" , {root : __dirname});
});

// ✅ GET users by category
app.get("/:category", (req, res) => {
  const category = req.params.category;
  try {
    const file = fs.readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(file);

    if (!data[category]) {
      return res.status(404).json({ success: false, message: "❌ Category not found" });
    }

    res.status(200).json({ success: true, data: data[category] });
  } catch (err) {
    console.error("❌ Read error:", err);
    res.status(500).json({ success: false, message: "❌ Error reading file" });
  }
});


// ✅ POST create user


app.post("/api", (req, res) => {
  const { category, ...user } = req.body;

  if (!category || !user.name || !user.img) {
    return res.status(400).json({ success: false, message: "❌ Missing required fields" });
  }

  try {
    const file = fs.readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(file);

    if (!data[category]) data[category] = [];

    data[category].push(user);

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

    res.status(201).json({ success: true, message: "✅ User added", data: user });
  } catch (err) {
    console.error("❌ Write error:", err);
    res.status(500).json({ success: false, message: "❌ Server error" });
  }
});


// ✅ PUT update user
app.put("/api/update", (req, res) => {
  const { category, name, ...updates } = req.body;

  if (!category || !name) {
    return res.status(400).json({ success: false, message: "❌ Missing category or name" });
  }

  try {
    const file = fs.readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(file);

    const list = data[category];
    if (!list) return res.status(404).json({ success: false, message: "❌ Category not found" });

    const userIndex = list.findIndex(item => item.name === name);
    if (userIndex === -1) return res.status(404).json({ success: false, message: "❌ User not found" });

    // Merge updates
    data[category][userIndex] = { ...list[userIndex], ...updates };

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.status(200).json({ success: true, message: "✅ User updated", data: data[category][userIndex] });
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(500).json({ success: false, message: "❌ Server error" });
  }
});


// ✅ DELETE user
app.post("/api/delete/user", (req, res) => {
  const { category, name } = req.body;

  if (!category || !name) {
    return res.status(400).json({ success: false, message: "❌ Missing category or name" });
  }

  try {
    const file = fs.readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(file);

    if (!data[category]) {
      return res.status(404).json({ success: false, message: "❌ Category not found" });
    }

    const filtered = data[category].filter(item => item.name !== name);
    const deleted = data[category].length !== filtered.length;

    data[category] = filtered;
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

    if (!deleted) {
      return res.status(404).json({ success: false, message: "⚠️ User not found" });
    }

    res.status(200).json({ success: true, message: "✅ User deleted" });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ success: false, message: "❌ Server error" });
  }
});


// 🚀 Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
