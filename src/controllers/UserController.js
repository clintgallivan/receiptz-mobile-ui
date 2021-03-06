// import httpClient from './HttpClient';
import exUser from '../exampleData/exUser.json';

class UserController {
  constructor() {
    this.basePath = '/users';
  }

  login = async (email, password) =>
    // Real implementation of a login request using the HttpClient
    /* try {
    const result = await httpClient.post({
      url: `${this.basePath}/session`,
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return result.data.user;
    // Data is the object exposes by axios for the response json
  } catch (error) {
    return error;
  }
  */
    // This is a mocked example to simulate api behavior
    new Promise((resolve, reject) => {
      if (email !== 'a@a.com' && password !== '') {
        setTimeout(() => resolve(exUser), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid Email/Password')), 1000);
      }
    });

  signup = async (email, password) =>
    // Real implementation of a login request using the HttpClient
    /* try {
    const result = await httpClient.post({
      url: `${this.basePath}/session`,
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return result.data.user;
    // Data is the object exposes by axios for the response json
  } catch (error) {
    return error;
  }
  */
    // This is a mocked example to simulate api behavior
    new Promise((resolve, reject) => {
      if (email !== 'a@a.com' && password !== '') {
        setTimeout(() => resolve(exUser), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid Email/Password')), 1000);
      }
    });

  logout = () => null;
}

export default new UserController();
