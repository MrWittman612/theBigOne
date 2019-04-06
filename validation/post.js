const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.email) ? data.text : '';


    if (!Validator.isLength(data.text, { min: 30, max: 300 })) {
      errors.text = 'Post must be between 30 and 300 words';
    }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
