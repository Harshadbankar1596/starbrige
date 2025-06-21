// models/all.js

import mongoose from "mongoose";

// Common schema for all types
const commonSchema = new mongoose.Schema({
    name: String,
    followers: String,
    img: String,
    profession: String,
    experience: String,
    languages: String,
    specialization: String
});

// Create models for each category
const actor = mongoose.model('actor', commonSchema);
const anchor = mongoose.model('anchor', commonSchema);
const influencer = mongoose.model('influencer', commonSchema);
const writer = mongoose.model('writer', commonSchema);
const reelshoot = mongoose.model('reelshoot', commonSchema);
const mehendiartist = mongoose.model('mehendiartist', commonSchema);
const makeupartist = mongoose.model('makeupartist', commonSchema);

// Export all models
export {
    actor,
    anchor,
    influencer,
    writer,
    reelshoot,
    mehendiartist,
    makeupartist
};
