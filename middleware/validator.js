const { check, validationResult } = require("express-validator");






exports.signUpRules=()=>[
    check("fullName","this field is required").notEmpty(),
    check("email","this should be a valid email").isEmail(),
    check("email","this field is required").notEmpty(),
    check("password","password should be more than 5 digits").isLength({min:5}),
]
exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}