import { phonebookInstance } from "./baseURL";


export const getContacts = async () => {
    const { data } = await phonebookInstance.get('/contacts');
    return data;
};

export const addContact = async contact => {
    //body= contacts {name, number}
    const { data } = await phonebookInstance.post('/contacts', contact);
    return data;
};

export const deleteContact = async id => {
    const { data } = await phonebookInstance.delete(`/contacts/${id}`);
    return data;
};

export const refreshContact = async contact => {
    const { data } = await phonebookInstance.patch('/contacts', contact);
    return data;
};
