// models/Actor.js
import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  name: String,
  followers: String,
  img: String,
  profession: String,
  experience: String,
  languages: String,
  specialization: String
});

const actor = mongoose.model('actor', actorSchema);
export default actor;
