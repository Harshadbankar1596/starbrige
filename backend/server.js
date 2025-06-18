import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors"

const app = express();
const port = 2323;

app.use(cors())
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect("mongodb://localhost:27017/starbrigeforms").then(() => {
    console.log("MongoDB connected");
}).catch(() => {
    console.log("Failed to connect to MongoDB");
});

const formdata = new mongoose.Schema({
    name: String,
    mail: String,
    phone: Number
});
const form = mongoose.model("form", formdata);

app.get("/", (req, res) => {
    res.send({
        name: "harshad",
        id: 24005,
        age: 19
    });
});

app.post("/formsubmit", async (req, res) => {
    try {
        const Form = new form({
            name: req.body.name,
            mail: req.body.mail,
            phone: req.body.phone,
        });
        await Form.save();
        console.log(req.body)
        res.send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to save form");
    }
});

app.listen(port, () => {
    console.log("App listening on port", port);
});
