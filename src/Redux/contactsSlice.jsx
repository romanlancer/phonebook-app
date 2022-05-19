import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
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

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Selectors
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
