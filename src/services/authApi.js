import { phonebookInstance } from './baseURL';

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userSignup = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const userLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const userLogout = async token => {
  //   setToken(token);
  const { data } = await phonebookInstance.post('/users/logout');
  return data;
};

export const currentUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');
  return data;
};
