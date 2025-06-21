// server.js

import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import * as models from './models/all.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 2323;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(() => console.log("❌ MongoDB connection failed"));

// Form model
const formdata = new mongoose.Schema({
    name: String,
    mail: String,
    phone: Number
});
const Form = mongoose.model("Form", formdata);

// Utility
function getModelByCategory(category) {
    return models[category] || null;
}

// Home route
app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname });
});

// Fetch all by category
app.get("/:category", async (req, res) => {
    const category = req.params.category;
    const Model = getModelByCategory(category);
    if (!Model) return res.status(400).json({ success: false, message: "❌ Invalid category" });

    try {
        const data = await Model.find();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: "❌ Error fetching data" });
    }
});

// Save form data
app.post("/formsubmit", async (req, res) => {
    try {
        const formEntry = new Form(req.body);
        await formEntry.save();
        res.status(201).json({ success: true, message: "✅ Form submitted", data: formEntry });
    } catch (err) {
        res.status(500).json({ success: false, message: "❌ Form save failed" });
    }
});

// Create user
app.post("/api", async (req, res) => {
    const { category, name, followers, img, profession, experience, languages, specialization } = req.body;
    const Model = getModelByCategory(category);

    if (!Model || !name || !img) {
        return res.status(400).json({ success: false, message: "❌ Invalid or missing fields" });
    }

    try {
        const data = new Model({ name, followers, img, profession, experience, languages, specialization });
        await data.save();
        res.status(201).json({ success: true, message: "✅ User created", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "❌ Server error while saving" });
    }
});

// Update user
app.post("/api/update/user", async (req, res) => {
    const { category, name, ...fields } = req.body;
    const Model = getModelByCategory(category);

    if (!Model || !name) return res.status(400).json({ success: false, message: "❌ Invalid request" });

    try {
        const result = await Model.updateOne({ name }, fields);
        if (result.matchedCount === 0) {
            return res.status(404).json({ success: false, message: "⚠️ User not found" });
        }

        res.status(200).json({ success: true, message: `✅ ${name} updated successfully`, result });
    } catch (error) {
        res.status(500).json({ success: false, message: "❌ Update failed" });
    }
});

// Delete user
app.post("/api/delete/user", async (req, res) => {
    const { category, name } = req.body;
    const Model = getModelByCategory(category);

    if (!Model || !name) return res.status(400).json({ success: false, message: "❌ Invalid request" });

    try {
        const result = await Model.deleteOne({ name });
        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "⚠️ User not found" });
        }

        res.status(200).json({ success: true, message: `✅ ${name} deleted successfully`, result });
    } catch (error) {
        res.status(500).json({ success: false, message: "❌ Delete failed" });
    }
});

// Server start
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
