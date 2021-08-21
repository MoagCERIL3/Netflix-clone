require('dotenv').config({ path : '../../config/.env'})
const fetch = require('node-fetch');

exports.getPopular =  function (req,res,next){

     fetch("https://api.themoviedb.org/3/tv/popular&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
                
    })
}

exports.getTrendingTvShows =  function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/trending/tv/week?api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getLatest =  function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/tv/latest?api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getTopRated =  function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getNetflixOriginals = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_networks=213&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getActionTvShows = function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10759&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getComedyTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=35&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getAnimationTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=16&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getDocumentaryTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=99&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getRealityTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10764&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getKidsTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10762&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getMysteryTvShows =  function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=9648&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getSciFiAndFantasyTvShows = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10765&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getFamilyTvShows = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10751&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getDramaTvShows = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=18&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getWarAndPolitics = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10768&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getTalkTvShows = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=10767&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}

exports.getWesternTvShows = function (req,res,next)  {
    
    fetch("https://api.themoviedb.org/3/discover/tv?page=1&with_genres=37&api_key="+process.env.API_KEY)
        .then(res=>res.json())
        .then(data=>{
            res.status(200).json(data);
            
        })
}
