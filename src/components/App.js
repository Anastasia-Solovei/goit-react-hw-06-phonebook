import React from "react";
// import { useSelector } from "react-redux";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm />
      </Section>

      <Section title={"Contacts"}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
