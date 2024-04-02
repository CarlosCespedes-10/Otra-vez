import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    
    removeContact: (state, action) => {
      const id = action.payload;
      const contactId = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      const newContact = {
        ...state.contacts[contactId],
        isDeleted: !state.contacts[contactId].isDeleted,
      };
      state.contacts[contactId] = newContact;
    },

    setContacts:(state, action) => {
      const data = action.payload;
      state.contacts = data;
    },

    toggleFavorites: (state, action) => {
      const id = action.payload;
      const contactId = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      const newContact = {
        ...state.contacts[contactId],
        isFavorite: !state.contacts[contactId].isFavorite,
      };
      state.contacts[contactId] = newContact;
    },
}
});

export const { addContact, removeContact, toggleFavorites, setContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
