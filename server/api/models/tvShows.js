const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvShowSchema = new Schema({

    id:{
        type : Number
    },

    original_name : {
        type : String
    },

    overview : {
        type : String
    },

    poster_path : {
        type : String
    },

    backdrop_pâth : {
        type : String 
    },

    original_language : {
        type: String
    },

    popularity : {
        type : Number
    },

    vote_average : {
        type : Number
    },

    vote_count : {
        type : Number
    },

    first_air_date : {
        type : String
    },






});

module.exports = mongoose.model('tvshows',tvShowSchema)
