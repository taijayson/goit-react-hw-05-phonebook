import { combineReducers } from "redux";
import {
  UPLOADCONTACTS,
  ADDCONTACT,
  FILTERCONTACT,
  DELETECONTACT,
} from "./contactsConstanse";
// import contactsBase from "../../data/contactBase.json";
const contacts = localStorage.getItem("contacts");

const contactsItem = (state = [], { type, payload }) => {
  switch (type) {
    case UPLOADCONTACTS:
      return payload;

    case ADDCONTACT:
      // console.log(payload);
      return [...state, payload];

    case DELETECONTACT:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const contactsFilter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTERCONTACT:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  contacts: contactsItem,
  filter: contactsFilter,
});

export { contactsReducer };
