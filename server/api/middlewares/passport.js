const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.use(new LocalStrategy(
    { 
      usernameField : 'email'
    },
    function(username, password, done) {
    
      User.findOne({ username: username }, async function(err, user) {
       
        if (err) return done(err); 
        
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        
        const validate = await User.isValidPassword(password,user.password);
        
        if (!validate) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((userId,done)=>{
  User.findById(userId)
    .then((user)=>{
      done(null,user);
    })
    .catch(err=> done(err))
});

