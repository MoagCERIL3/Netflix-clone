const bcrypt = require('bcrypt');
const User = require('../models/users')



exports.signUp = async (req,res) => {
   
    try{
        const { email, password } = req.body;
        let user = new User({username : email,email : email, password: password});
        let  salt = bcrypt.genSaltSync(10);
        user.password = await bcrypt.hash(password,salt);
        const newUser = await user.save();
        res.status(200).json('User created');
         
    }catch{

    }
    
};

exports.signIn =  (req,res) => {

    
    res.status(200).json('Logged in');
    


};

exports.signOut = (req,res) => {
    req.logout();
    res.redirect('/signin');
};

exports.getCurrent = async (req,res) => {

};

exports.google = async (req,res) => {

};

exports.googleSignIn = async (req,res) => {

};

exports.resetPassword = async (req,res) => {

};

