import { db } from "../../db/request";
import {
  UPLOADCONTACTS,
  ADDCONTACT,
  FILTERCONTACT,
  DELETECONTACT,
} from "./contactsConstanse";

const uploadContacts = (contacts) => ({
  type: UPLOADCONTACTS,
  payload: contacts,
});

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

const allActions = { uploadContacts, addContact, filterContact, deleteContact };

export default allActions;
