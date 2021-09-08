import axios from "axios";

export const axiosFirebase = axios.create({
    baseURL: 'https://pizza-10de4-default-rtdb.europe-west1.firebasedatabase.app/',
    timeout: 1000,
  });