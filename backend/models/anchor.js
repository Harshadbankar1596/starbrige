import mongoose from "mongoose"

const anchorSchema = new mongoose.Schema({
    name: String,
    followers: String,
    img: String,
    profession: String,
    experience: String,
    languages: String,
    specialization: String
});

const anchor = mongoose.model('anchor', anchorSchema);
export default anchor;
