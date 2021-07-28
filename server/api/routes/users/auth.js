const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');
const passport = require('passport');



router.get('/signup',(req, res) => {
    res.render('register.ejs')
});
router.get('/',(req, res) => {
  res.render('index.ejs')
});
router.get('/signin',(req, res) => {
  res.render('login.ejs')
});

router.post('/signup',authController.signUp);
router.post('/signin',passport.authenticate('local',{ successRedirect: '/',failureRedirect: '/signin'}));
router.get('/signout',authController.signOut);
router.get('/me',authController.getCurrent);
router.get('/auth/google',authController.google);
router.get('/auth/google/callback',authController.googleSignIn);
router.post('/resetpassword',authController.resetPassword);



module.exports = router;