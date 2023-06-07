// src/services/productService.js
import newRequest from '../utils/API';

import axios from 'axios';

const userService = {
  login: (info:any) => {
    return newRequest.post('/user/createUser',info);
  },
  getuser: () => {
    return newRequest.get('/user/user');
  }
};





export default userService;
