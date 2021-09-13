import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";

import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
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
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
