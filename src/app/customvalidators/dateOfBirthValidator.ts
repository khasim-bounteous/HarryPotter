import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateOfBirthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    if (!value) {
      return { dateOfBirthInvalid: 'Date of Birth is required' };
    }

    const currentDate = new Date();
    const selectedDate = new Date(value);
    
    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
    const isOldEnough = ageDifference > 13 || (ageDifference === 13 && currentDate >= new Date(selectedDate.setFullYear(selectedDate.getFullYear() + 13)));

    return isOldEnough ? null : { dateOfBirthInvalid: 'You must be at least 13 years old' };
  };
}
