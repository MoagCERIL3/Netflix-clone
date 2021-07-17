const express = require('express')
const  router = express.Router()
const moviesController = require('../../controllers/movies')

router.get('/',moviesController.getAll);
router.get('/top',moviesController.getTop)
router.get('/trending/movie/week',moviesController.getTrendingMovies);
router.get('/movie/topRated/',moviesController.getTopRated);
router.get('/movie/netflixOriginals',moviesController.getNetflixOriginals);
router.get('/movie/action',moviesController.getActionMovies);
router.get('/movie/comedy',moviesController.getComedyMovies);
router.get('/movie/adventure',moviesController.getAdventureMovies);
router.get('/movie/drama',moviesController.getDramaMovies);
router.get('/movie/family',moviesController.getFamiltyMovies);
router.get('/movie/history',moviesController.getHistoryMovies);
router.get('/movie/thriller',moviesController.getThrillerMovies);

module.exports = router