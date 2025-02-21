import { DataValidator } from '../dataValidator';

describe('DataValidator', () => {
  const validator = new DataValidator();

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validator.isValidEmail('test@example.com')).toBe(true);
      expect(validator.isValidEmail('invalid.email')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should validate correct phone numbers', () => {
      expect(validator.isValidPhone('123-456-7890')).toBe(true);
      expect(validator.isValidPhone('+1234567890')).toBe(true);
      expect(validator.isValidPhone('invalid')).toBe(false);
    });
  });

  describe('isStrongPassword', () => {
    it('should validate password strength', () => {
      expect(validator.isStrongPassword('TestPass123')).toBe(true);
      expect(validator.isStrongPassword('weakpass')).toBe(false);
    });
  });
}); 