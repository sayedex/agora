// src/services/productService.js
import newRequest from '../utils/API';

import axios from 'axios';

const productService = {
  addProduct: (productData:any) => {
    return newRequest.post('/product/addProduct', productData);
  },
  getProduct: (productId: string) => {
    return newRequest.get(`/product/product/${productId}`);
  },
  updateProduct: (productId: string,productData:any) => {
    return newRequest.post(`/product/Updateproduct/${productId}`,productData);
  },
  removeProduct:(productId: number) => {
    return newRequest.delete(`/product/removeproduct/${productId}`);
  },
  getallproduct:(page:number)=>{
    return newRequest.get(`/product/allproducts?page=${page}&limit=10`);
  },
  getproductALL: () => {
    return newRequest.get(`/product/allproducts`);
  },
};





export default productService;
