const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const usersSchema = new Schema({

    username:{
        type: String
    },

    email:{
        type : String
    },

    password:{
        type : String
    },

    googleId:{
        type: String
    },

    FirstAccountUsername:{
        type : String
    },

    FirstAccountAvatar:{
        type : String
    },

    FirstAccountWatchList:{
        type: [String]
    },

    FirstAccountLikes:{
        type: [String]
    },

    FirstAccountdisLikes:{
        type: [String]
    },

    createdAt : {
        type: Date,
        default: Date.now,
    }


});

usersSchema.statics.usernameExists = async function(username) {
    
    const user = await mongoose.model('users').findOne({ username });

    if(user) return true;
    
    return false;
  };

usersSchema.statics.isValidPassword = async function(password,userPassword) {

    if( !password || !userPassword) return false;

    const isMatch = await bcrypt.compare(password, userPassword);
  
    return isMatch;
  };

module.exports = mongoose.model('users', usersSchema);