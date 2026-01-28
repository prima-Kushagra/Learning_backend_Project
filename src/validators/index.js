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


const userChangeCurrentPasswordValidator = () => {
    return [
        body('oldPassword').notEmpty().withMessage("Old password i  required"),
        body("newPassword").notEmpty().withMessage("New password is required")
    ]
}


const userForgotPasswordValidator = () =>{
  return [
    body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Email is invalid")
  ]
};

const userResetForgotPasswordValidator = () => {
    return [body("newPassword").notEmpty().withMessage("Password is required")];
};
export {userRegisterValidator , userLoginValidator , userChangeCurrentPasswordValidator, userForgotPasswordValidator ,userResetForgotPasswordValidator};