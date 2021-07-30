const bcrypt = require('bcrypt');
const User = require('../models/users')
const passport = require('passport');


exports.signUp = async (req,res) => {
   
    try{
        const { email, password } = req.body;
        let user = new User({username : email,email : email, password: password});

        let  salt = bcrypt.genSaltSync(10);
        user.password = await bcrypt.hash(password,salt);

        const username = await User.usernameExists(user.username);
        if(username) {
            res.status(400).json({
                                    success : false,
                                    errors : [{
                                            message : "Username (email) already used unfortunately."
                                            }]
                                });
        }else{
            const newUser = await user.save()
                .then(user => res.status(200).json({
                                                    success : true,
                                                    message :"User created",
                                                    user : user})
                ).catch(err => res.status(400).json({
                                                    success : false,
                                                     errors : [{ message : err.message}]
                                                    }));
        }
        
        
         
    }catch(e){
        res.status(500).json({success : false,
                            errors : [{ message : e.message}]
                            });
    }
    
};

exports.signIn =  (req,res,next) => {
    passport.authenticate('local',(err, user, info) => {
        if (err) { 
            return res.status(400).json({message : err}); 
        }
        if (!user) {
             return res.status(401).json(info);
            }

        req.logIn(user, function(err) {
            if (err) { 
                return res.status(500).json({message : err}); 
            }
            return  res.status(200).json({user : req.user});
        });

    })(req, res);


    
    
    
    


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

