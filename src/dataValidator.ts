export class DataValidator {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPhone(phone: string): boolean {
    //formats: +1234567890, 123-456-7890, (123) 456-7890
    const phoneRegex = /^(\+\d{1,3}[-.]?)?\(?(\d{3})\)?[-.]?\d{3}[-.]?\d{4}$/;
    return phoneRegex.test(phone);
  }

  isStrongPassword(password: string): boolean {
    // Minimum 8 chars, one uppercase letter, one lowercase letter, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
} 