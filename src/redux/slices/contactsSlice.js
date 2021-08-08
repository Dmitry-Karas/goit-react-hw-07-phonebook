import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => {
        return id !== payload;
      }),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
// const addContact = (state, { payload }) => {
//   const includedContact = checkContact(state, payload.name, payload.number);

//   if (includedContact) return state;

//   return [...state, payload];
// };

// const deleteContact = (state, { payload }) => {
//   const contacts = state.filter(({ id }) => {
//     return id !== payload;
//   });

//   return contacts;
// };
