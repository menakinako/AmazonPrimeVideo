import mongoose from 'mongoose'


const tvSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: String,
    description: String,
    starring: String,
    genres: String,
    subTitlte: String,
    audioLanguages: String
})

const tvslides = mongoose.model('tvslide', tvSchema);

export default tvslides;