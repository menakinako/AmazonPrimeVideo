import mongoose from 'mongoose'


const csSchema = new mongoose.Schema({
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

const channelslides = mongoose.model('channelslide', csSchema);

export default channelslides;