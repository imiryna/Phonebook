import axios from "axios";

export const phonebookInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    headers: {
        Authorization: 'Bearer'
    }
  });