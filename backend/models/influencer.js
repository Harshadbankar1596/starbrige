import mongoose from "mongoose"


const influencerSchema = new mongoose.Schema({
    name: String,
    followers: String,
    img: String,
    profession: String,
    experience: String,
    languages: String,
    specialization: String
});

const influencers = mongoose.model('influencers', influencerSchema);
export default influencers;
