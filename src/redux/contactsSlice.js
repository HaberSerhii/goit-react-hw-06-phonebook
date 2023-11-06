import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact(state, actions) {
      const contactPresence = state.some(
        ({ name }) => actions.payload.contact.name === name
      );
      if (contactPresence) {
        alert(`${actions.payload.contact.name} is already in contacts`);
        return;
      }
      state.push({
        id: nanoid(),
        name: actions.payload.contact.name,
        number: actions.payload.contact.number,
      });
    },

    removeContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
