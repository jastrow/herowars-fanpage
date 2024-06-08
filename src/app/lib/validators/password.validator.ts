// password.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    //const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const minLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasDigit && minLength;

    if (!passwordValid) {
      return {
        passwordStrength: {
          hasUpperCase,
          hasLowerCase,
          hasDigit,
          minLength,
        },
      };
    }

    return null;
  };
}
