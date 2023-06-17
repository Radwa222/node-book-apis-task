const { check, oneOf } = require('express-validator');
const { validationResult } = require('express-validator');

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).send({ errors: errors.array() });
  next();
}

exports.createValidator = [
  check('title')
    .trim()
    .isLength({ min: 3 })
    .withMessage('book title is too short!')
    .isLength({ max: 32 })
    .withMessage('book title is too long!'),

  check('author')
    .trim()
    .isLength({ min: 3 })
    .withMessage('author name is too short!')
    .isLength({ max: 32 })
    .withMessage('author name is too long!'),

  check('pages').isInt({ gt: 20 }).withMessage('invalid number of pages'),

  validator,
];
exports.getValidator = [
  check('id').isMongoId().withMessage('invalid id format'),
  validator,
];

exports.deleteValidator = [
  check('id').isMongoId().withMessage('invalid id format'),
  validator,
];
exports.listValidator = [
  check('_id').optional().isMongoId().withMessage('invalid id format'),
  validator,
];

exports.updateValidator = [
  check('id').isMongoId().withMessage('invalid id format'),
  oneOf([
    check('title')
      .exists()
      .trim()
      .isLength({ min: 3 })
      .withMessage('book title is too short!')
      .isLength({ max: 32 })
      .withMessage('book title is too long!'),

    check('author')
      .exists()
      .trim()
      .isLength({ min: 3 })
      .withMessage('author name is too short!')
      .isLength({ max: 32 })
      .withMessage('author name is too long!'),

    check('pages')
      .exists()
      .isInt({ gt: 20 })
      .withMessage('invalid number of pages'),
  ]),
  validator,
];
