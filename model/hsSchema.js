import mongoose from 'mongoose'


const hsSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    video: String,
    title: String,
    description: String,
    director: String,
    starring: String,
    genres: String,
    subTitlte: String,
    audioLanguages: String
})

const homeslides = mongoose.model('homeslide', hsSchema);

export default homeslides;