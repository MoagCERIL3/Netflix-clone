const { body, validationResult } = require('express-validator');

const signUpValidationRules = () => [
    body('email','Sorry, Invalid email.').isEmail(),
    body('password','Sorry, Invalid password. It must be at least 8 characters.').isLength({min: 8 })
];

const validator = (req,res,next)=>{

    const customErrors = (Array) => Array.map((err) => ({ [err.param]: err.msg }));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            success : false,
            errors: customErrors(errors.array())});
    } else {
        next();
    }
}

module.exports = {
    signUpValidationRules,
    validator
}


