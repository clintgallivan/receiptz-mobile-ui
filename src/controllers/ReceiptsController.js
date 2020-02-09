// import httpClient from './HttpClient';
import data from '../exampleData/receipts.json'

class ReceiptsController {
    constructor() {
      this.basePath = '/receipts';
    }
  
    getUserRecepts = async (userId) =>
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
        if (userId) {
            resolve(data)
        } else {
          throw reject(new Error('no data found'))
        }
      });
  
  }
  
  export default new ReceiptsController();
  