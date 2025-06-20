import dotenv from 'dotenv';
dotenv.config();
import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors"
import { actor, anchor, influencer } from './models/all.js';

const app = express();
const port = process.env.PORT


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json());
app.use(urlencoded())

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI).then(() => {
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
    res.sendFile("./public/index.html", { root: __dirname })
});


app.get("/actors", async(req, res) => {
    const Actor = await actor.find()
    res.send(Actor)
});

app.get("/anchors", async(req, res) => {
    const Anchor = await anchor.find()
    res.send(Anchor)
});

app.get("/influencers", async(req, res) => {
    const Influenser = await influencer.find()
    res.send(Influenser)
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

app.post("/api", async (req, res) => {
    console.log(req.body)

    const { category, name, followers, img, profession, experience, languages, specialization } = req.body;

    // Pick the correct model
    let Model;
    if (category === 'actor') Model = actor;
    else if (category === 'anchor') Model = anchor;
    else if (category === 'influencer') Model = influencer;
    else return res.status(400).send("Invalid category");

    try {
        const data = new Model({
            name,
            followers,
            img,
            profession,
            experience,
            languages,
            specialization
        });

        await data.save();
        console.log("Data saved:", data);
        // alert("data sucssesfully saved")
        res.sendFile("./public/index.html" , {root : __dirname})
    } catch (error) {
        console.log("Error saving data:", error);
        res.status(500).send("Server error");
    }
});
app.listen(port, () => {
    console.log("App listening on port", port);
});
