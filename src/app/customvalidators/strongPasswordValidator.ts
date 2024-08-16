import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // If no value, consider it valid
    }

    // Define the regex for the password criteria
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const validLength = value.length > 6;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && validLength;

    return !passwordValid ? { strongPassword: true } : null;
  };
}
