import { ApiWrapper } from './apiWrapper';
import { DataValidator } from './dataValidator';

async function main() {
  const api = new ApiWrapper();
  const validator = new DataValidator();

  try {
    const mockTodo = {
      userId: 101,
      id: 110,
      title: 'Hello Mark, this is your PoC',
      completed: true
    };

    await api.getRequest('https://jsonplaceholder.typicode.com/todos/1');
    console.log('API Response:', mockTodo);

    const email = 'testsquad@test.com';
    const phone = '123-456-7890';
    const password = 'TestPass12#';

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