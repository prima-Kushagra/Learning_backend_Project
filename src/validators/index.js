import {body} from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
        .trim()
        .notEmpty()
        .withMessage("email is required")
        .isLowercase()
        .withMessage("Username must be in lowercase")
        .isLength({min:3})
        .withMessage("Username must be 3 cahr long "),
       body("password")
       .trim()
       .notEmpty()
       .withMessage("Password is required"),
       body("fullName")
        .optional()
        .trim()
       
    ];
}

const userLoginValidator = () => {
    return [
        body("email")
        .optional()
        .isEmail()
        .withMessage("Email is invalid"),
        body("password")
        .notEmpty()
        .withMessage("Pass is requireed")
    ];
}


export {userRegisterValidator , userLoginValidator};