# PoC for Mark

A simple NodeJS (TypeScript) utility project that provides:
- **HTTP request wrapper** (GET, POST, PUT, DELETE)
- **Data validation utilities** for email, phone numbers, and passwords
- **Unit Tests** for both utilities

---

## Files

### apiWrapper.ts
Defines the `ApiWrapper` class that simplifies making HTTP requests using axios. It includes four main functions:
- **getRequest**
- **postRequest**
- **putRequest**
- **deleteRequest**

Each function handles its respective HTTP method and returns the response data. If an error occurs, a private `handleError` function checks whether it's an axios error and returns a custom error message based on the response or request status for consistent error handling.

---

### dataValidator.ts
Defines a `DataValidator` class with three validation functions using regular expressions:
- **isValidEmail**: Checks if an email is formatted correctly.
- **isValidPhone**: Validates phone numbers matching common formats like “+1234567890” or “123-456-7890.”
- **isStrongPassword**: Ensures a password is strong by requiring at least eight characters with a mix of uppercase, lowercase, and numeric characters.

---

### index.ts
Demonstrates how to use the `ApiWrapper` and `DataValidator` classes. The `main` function:
- Makes an API call using `ApiWrapper` to fetch data from a test URL and logs the response.
- Uses `DataValidator` to validate a sample email, phone number, and password.
- Catches and logs errors that might occur during the API call.

---

### apiWrapper.test.ts
Tests the `ApiWrapper` class using Jest. It mocks axios to simulate API responses without making real network calls:
- **Successful GET request test**: Checks if `getRequest` returns the expected data when the API call succeeds.
- **Error handling test**: Verifies that `getRequest` throws an error when the API call fails.

---

### dataValidator.test.ts
Tests the `DataValidator` class using Jest to ensure its validation functions work correctly:
- **isValidEmail**: Verifies that valid emails return true and invalid emails return false.
- **isValidPhone**: Confirms that valid phone numbers are accepted and invalid formats are rejected.
- **isStrongPassword**: Checks that strong passwords pass the validation and weak ones fail.

---

## How to Run

### Run the utilities   
```bash
npm start
```
### Run the tests   
```bash
npm test
