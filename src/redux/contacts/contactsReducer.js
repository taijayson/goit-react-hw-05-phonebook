import { combineReducers } from "redux";
import { ADDCONTACT, FILTERCONTACT, DELETECONTACT } from "./contactsConstanse";
import contactsBase from "../../data/contactBase.json";

const contactsItem = (state = contactsBase, { type, payload }) => {
  switch (type) {
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
