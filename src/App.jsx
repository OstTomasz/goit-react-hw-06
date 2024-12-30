import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";

import initialContacts from "./initialContacts.json";
import { useState, useEffect } from "react";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) return JSON.parse(savedContacts);
    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const [filter, setFilter] = useState("");

  const handleFilter = (val) => {
    setFilter(val);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </main>
  );
};
