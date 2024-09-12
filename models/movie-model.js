const moongoose = require('mongoose')

const MovieSchema = moongoose.Schema({
    
    title: String,  
    complate: Boolean,
    path:String,
    description:String,
    year: Number,
    
})

const MovieModel = moongoose.model('movie-management', MovieSchema);

module.exports = MovieModel