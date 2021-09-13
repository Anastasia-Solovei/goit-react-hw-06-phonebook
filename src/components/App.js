import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Section from "./Section";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useLocalStorage("filter", "");
  const [filteredContacts, setFilteredContacts] = useState("");

  useEffect(() => {
    setFilteredContacts(() => {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    });
  }, [contacts, filter]);

  const handleAddContact = (contact) => {
    setContacts((prevState) => {
      return [contact, ...prevState];
    });
  };

  const handleDeleteContact = (e) => {
    const { id } = e.target;

    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== id);
    });
  };

  const handleCheckUniqueContact = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && alert("Contact is already exist!");

    return !isExistContact;
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;

    setFilter(value.toLowerCase());
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm
          onAdd={handleAddContact}
          onCheckContact={handleCheckUniqueContact}
        />
      </Section>

      <Section title={"Contacts"}>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </>
  );
}
