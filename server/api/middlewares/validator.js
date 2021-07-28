const { body, validationResult } = require('express-validator');

const signUpValidationRules = () => [
    body('email').isEmail(),
    body('password').isLength({min: 8 })
];

const validator = (req,res,next)=>{

    const customErrors = (Array) => Array.map((err) => ({ [err.param]: err.msg }));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: customErrors(errors.array())});
    } else {
        next();
    }
}

module.exports = {
    signUpValidationRules,
    validator
}


