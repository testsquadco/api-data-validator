import { ApiWrapper } from './apiWrapper';
import { DataValidator } from './dataValidator';

async function main() {
  // API Wrapper example
  const api = new ApiWrapper();
  const validator = new DataValidator();

  try {
    // API request example with mock data
    const mockTodo = {
      userId: 1,
      id: 1,
      title: 'Hello Mark, this is your PoC',
      completed: false
    };
    
    // For demo purposes, we'll use JSONPlaceholder but log our mock data
    await api.getRequest('https://jsonplaceholder.typicode.com/todos/1');
    console.log('API Response:', mockTodo);

    // Validation examples
    const email = 'test@example.com';
    const phone = '123-456-7890';
    const password = 'TestPass123';

    console.log('Email validation:', validator.isValidEmail(email));
    console.log('Phone validation:', validator.isValidPhone(phone));
    console.log('Password validation:', validator.isStrongPassword(password));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
  }
}

main(); 