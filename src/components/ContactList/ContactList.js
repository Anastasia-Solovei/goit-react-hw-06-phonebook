import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";
import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  return allContacts.filter(({ name }) => name.toLowerCase().includes(filter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
