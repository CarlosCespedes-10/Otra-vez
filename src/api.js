import axios from "axios"

const getContacts = async() => {
    const {data} = await axios.get("https://reqres.in/api/users?per_page=12");
    return data.data;
}

const getContactApi = async(contact) => {
   const {data} = await axios.get( "http://localhost:8000/contacts", contact );
   return data;
}

const addContactsApi = async(contact) => {
    await axios.post( "http://localhost:8000/contacts", contact );
    return true;
}

const UpdateContactApi = async(contact) => {
    await axios.put( `http://localhost:8000/contacts/${contact.id}` , contact );
    return true;
}


export {getContacts, addContactsApi, UpdateContactApi, getContactApi}