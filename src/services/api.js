import { phonebookInstant } from "./baseURL";


export const getContacts = async () => {
    const { data } = await phonebookInstant.get('/contacts');
    return data;
};

export const addContact = async contact => {
    //body= contacts {name, number}
    const { data } = await phonebookInstant.post('/contacts', contact);
    return data;
};

export const deleteContact = async id => {
    const { data } = await phonebookInstant.delete(`/contacts/${id}`);
    return data;
};

export const refreshContact = async contact => {
    const { data } = await phonebookInstant.patch('/contacts', contact);
    return data;
};
