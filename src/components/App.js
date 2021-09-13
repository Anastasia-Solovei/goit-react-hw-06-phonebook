// import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/contacts/contacts-actions";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const App = ({ items, onAddContact }) => {
  // const handleCheckUniqueContact = (name) => {
  //   const isExistContact = !!contacts.find((contact) => contact.name === name);

  //   isExistContact && alert("Contact is already exist!");

  //   return !isExistContact;
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm
          onAdd={onAddContact}
          //onCheckContact={handleCheckUniqueContact}
        />
      </Section>

      <Section title={"Contacts"}>
        <Filter />
        <ContactList contacts={items} />
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (item) => dispatch(actions.addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
