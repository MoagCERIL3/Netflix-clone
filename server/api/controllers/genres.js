require('dotenv').config({ path: '../../config/.env' })
const fetch = require('node-fetch');

exports.getGenres = async (req,res)=> {

    await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+process.env.API_KEY)
            .then(res=>res.json())
            .then(data=>{
                    
                    data.genres.forEach(genre=>{
                        if(req.query.id == genre.id) {
                            
                            res.status(200).send(genre);
                        }
                    });
                
            })
            .catch(err=> res.status(502).send(err))
}