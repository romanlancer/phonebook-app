import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;

// Selectors
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
