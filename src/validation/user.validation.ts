import { check } from 'express-validator';

export const emailValidation = [
  check('email')
    .notEmpty()
    .withMessage('Please provide email')
    .bail()
    .isEmail()
    .withMessage('Please provide a valid email address'),
];

export const passwordValidation = (field: string) => [
  check(field)
    .notEmpty()
    .withMessage(`Please provide ${field}`)
    .bail()
    .isLength({ min: 8 })
    .withMessage(`${field} must be at least 8 characters long`),
];

export const updateUserValidation = [
  // check("name")
  //   .notEmpty()
  //   .withMessage("Please provide  name")
  // .bail()
  check('firstName')
    .optional()
    .notEmpty()
    .withMessage('Please provide firstName')
    .isLength({ min: 2, max: 50 })
    .withMessage(' name must be between 2 and 50 characters long'),
  check('lastName')
    .optional()
    .notEmpty()
    .withMessage('Please provide lastName')
    .isLength({ min: 2, max: 50 })
    .withMessage(' name must be between 2 and 50 characters long')
    .bail(),
  ...emailValidation,
  // check("phoneNumber")
  //   .notEmpty()
  //   .withMessage("Please provide phone number")
  // .bail(),
];

export const signUpValidation = [
  ...updateUserValidation,
  ...passwordValidation('password'),
  // check("timeZone").notEmpty().withMessage("Please provide timeZone"),
  check('role')
    .notEmpty()
    .withMessage('Please provide role')
    .bail()
    .isIn(['ADMIN', 'USER'])
    .withMessage('Role must be either ADMIN or USER'),
];
