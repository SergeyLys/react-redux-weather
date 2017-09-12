import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export function validateInput(data) {
    let errors = {};

    if (typeof data.city !== 'undefined' && Validator.isEmpty(data.city)) {
        errors.city = 'This is required field'
    }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}