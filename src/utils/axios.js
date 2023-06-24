/**
 * axios setup to use mock service
 */

import axios from "axios";
import { BASE_URL } from "../config";
// import { Logout } from 'store/reducers/auth';
// import snackbar from './snackbar';

const axiosServices = axios.create();

axiosServices.interceptors.request.use(
  (config) => {
    config.baseURL = BASE_URL;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    // const { response } = error;
    // if (response && response.status === 500) {
    //   snackbar(response.data, "error");
    // } else if (response && response.status === 400) {
    //   snackbar(response.data, "error");
    //   // store.dispatch(Logout({}));
    // } else if (response && response.status === 413) {
    //   console.log("413 error");
    //   snackbar(response.data, "error");
    // } else if (response && response.status === 429) {
    //   console.log("429 error");
    //   // snackbar(response.data, 'error');
    // } else {
    //   console.log(response, "response");
    // }
    return Promise.reject(error);
  }
);

export default axiosServices;
