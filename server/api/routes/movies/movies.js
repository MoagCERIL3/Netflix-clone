const express = require('express')
const  router = express.Router()
const moviesController = require('../../controllers/movies')

router.get('/',moviesController.getAll);

router.get('/trending/movie/week',moviesController.getTrendingMovies);
router.get('/movies/topRated/',moviesController.getTopRated);
router.get('/tv/netflixOriginals',moviesController.getNetflixOriginals);

module.exports = router