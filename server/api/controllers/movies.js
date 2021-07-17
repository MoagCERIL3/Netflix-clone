require('dotenv').config({ path: '../../config/.env' })
const fetch = require('node-fetch');


exports.getAll = (req,res,next) =>{

    // trending
    this.getTrendingMovies(req,res,next);
    // trending
    this.getNetflixOriginals(req,res,next);
    // trending
    this.getNetflixOriginals(req,res,next);
    
}

exports.getTrendingMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getTopRated = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/movie/top_rated?page=1&region=US&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getNetflixOriginals = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_networks=213&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}



exports.getActionMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=28&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getComedyMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=25&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}


exports.getHorrorMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=27&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getAdventureMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=12&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getDramaMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=18&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getFamiltyMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=10751&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getHistoryMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=36&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getThrillerMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_genres=53&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}

exports.getTop = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?page=1&with_networks=213&api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}


