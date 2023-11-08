import { phonebookInstant } from "./baseURL";

export const userSignup = async formData =>{
    const {data} = await phonebookInstant.post('/users/signup', formData);
    return data;
}

export const userLogin = async formData =>{
    const {data} = await phonebookInstant.post('/users/login', formData);
    return data;
}

export const userLogout = async () =>{
    const {data} = await phonebookInstant.post('/users/logout');
    return data;
}

export const refreshUser = async () =>{
    const {data} = await phonebookInstant.get('/users/current');
    return data;
}