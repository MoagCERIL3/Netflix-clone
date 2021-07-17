require('dotenv').config({ path: '../../config/.env' })
const fetch = require('node-fetch');


exports.getAll = (req,res,next) =>{

    // trending
    this.getTrendingMovies(req,res,next);
    
}

exports.getTrendingMovies = async function (req,res,next)  {
    
    
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key="+process.env.API_KEY)
    .then(res=>res.json())
    .then(data=>{
        res.status(200).json(data);
        console.log(data);
    })
}



