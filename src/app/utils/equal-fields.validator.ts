import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * Checks if all the specified fields in the form have the same value
 */
export const equalFieldsValidator = (...fields: string[]): ValidatorFn => {
  return (group: FormGroup): ValidationErrors | null => {
    const areEquals = fields
      .map(fieldName => group.get(fieldName))
      .filter(Boolean)
      .every((control, i, array) => control.value === array[0].value);

    return areEquals ? null : { equalFields: true };
  };
};