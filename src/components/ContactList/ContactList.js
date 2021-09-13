import React from "react";
import PropTypes from "prop-types";

import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
