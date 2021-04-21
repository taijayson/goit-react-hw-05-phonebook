import React from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

// import { v4 as uuidv4 } from "uuid";

import "./App.css";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Annie Copeland", number: "227-91-26" },
//       { id: "id-2", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-3", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-4", name: "Rosie Simpson", number: "459-12-56" },
//     ],
//     filter: "",
//   };

//   getContactMatch = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter((contacts) =>
//       contacts.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   contactFilter = (event) => {
//     const { value } = event.currentTarget;
//     this.setState({ filter: value });
//   };

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem("contacts"));
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contact !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getContactMatch();

export const App = () => {
  return (
    <div className="wrap">
      <div className="section">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        {/* onSubmit={this.addContact} */}
      </div>
      <div className="section">
        <h2 className="title">Contacts</h2>
        <Filter />
        {/* value={filter} onChange={this.contactFilter} */}
        <ContactList />
        {/* contacts={filteredContacts}
        onRemoveContact={this.deleteContact} */}
      </div>
    </div>
  );
};
// }

export default App;
