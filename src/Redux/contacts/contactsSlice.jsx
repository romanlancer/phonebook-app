import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },

  reducers: {
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { setFilter } = contactsSlice.actions;

// Selectors
export const getFilter = state => state.contacts.filter;
