import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
