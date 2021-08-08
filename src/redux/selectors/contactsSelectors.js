export const getFilter = (state) => {
  return state.filter;
};

export const getContacts = (state) => {
  return state.contacts;
};

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state);

  const filter = getFilter(state);

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );
};
