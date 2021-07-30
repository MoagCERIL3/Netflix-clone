const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');
const {validator, signUpValidationRules} = require('../../middlewares/validator');



router.get('/signup',(req, res) => {
    res.render('register.ejs')
});
router.get('/',(req, res) => {
  res.render('index.ejs')
});
router.get('/signin',(req, res) => {
  res.render('login.ejs')
});

router.post('/signup',signUpValidationRules(),validator,authController.signUp);
//router.post('/signin',passport.authenticate('local'),authController.signIn);
router.post('/signin',authController.signIn);
router.get('/signout',authController.signOut);
router.get('/me',authController.getCurrent);
router.get('/auth/google',authController.google);
router.get('/auth/google/callback',authController.googleSignIn);
router.post('/resetpassword',authController.resetPassword);



module.exports = router;