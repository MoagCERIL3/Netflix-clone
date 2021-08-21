const express = require('express');
const router = express.Router();
const tvShowsController = require('../../controllers/tvShows');

router.get('/popular',tvShowsController.getPopular);
router.get('/trending/tv/week',tvShowsController.getTrendingTvShows);
router.get('/latest',tvShowsController.getLatest);
router.get('/topRated',tvShowsController.getTopRated);
router.get('/netflixOriginals',tvShowsController.getNetflixOriginals);
router.get('/action', tvShowsController.getActionTvShows);
router.get('/comedy',tvShowsController.getComedyTvShows);
router.get('/documentary', tvShowsController.getDocumentaryTvShows);
router.get('/animation',tvShowsController.getAnimationTvShows);
router.get('/reality',tvShowsController.getRealityTvShows);
router.get('/kids',tvShowsController.getKidsTvShows);
router.get('/drama', tvShowsController.getDramaTvShows);
router.get('/family',tvShowsController.getFamilyTvShows);
router.get('/mystery',tvShowsController.getMysteryTvShows);
router.get('/sci-fiAndFantasy', tvShowsController.getSciFiAndFantasyTvShows);
router.get('/war-politics',tvShowsController.getWarAndPolitics);
router.get('/talk',tvShowsController.getTalkTvShows);
router.get('/western',tvShowsController.getWesternTvShows);


module.exports = router;