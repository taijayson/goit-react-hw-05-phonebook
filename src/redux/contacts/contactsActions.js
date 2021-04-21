import { ADDCONTACT, FILTERCONTACT, DELETECONTACT } from "./contactsConstanse";

const addContact = (contact) => {
  return {
    type: ADDCONTACT,
    payload: {
      id: contact.id,
      name: contact.name,
      number: contact.number,
    },
  };
};

const filterContact = (value) => {
  return {
    type: FILTERCONTACT,
    payload: value,
  };
};

const deleteContact = (id) => {
  return {
    type: DELETECONTACT,
    payload: id,
  };
};

const allActions = { addContact, filterContact, deleteContact };

export default allActions;
