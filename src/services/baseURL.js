import axios from "axios";

export const phonebookInstant = axios.create({
    BaseURL: 'https://connections-api.herokuapp.com/',
    headers: {
        Authorization: 'Bearer ..'
    }
  });