const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({

    id:{
        type : Number
    },

    imdb_id:{
        type : String
    },

    original_title:{
        type: String
    },

    overview:{
        type: String
    },

    poster_path:{
        type: String
    },
    
    original_language:{
        type: String
    },

    popularity:{
        type : Number
    },

    vote_average:{
        type : Number
    },

    vote_count:{
        type: Number
    },

    release_date:{
        type: String
    }

    

});





module.exports = mongoose.model('movies',moviesSchema)