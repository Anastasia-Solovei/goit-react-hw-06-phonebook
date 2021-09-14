import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";
import {
  getContacts,
  getFilter,
} from "../../redux/contacts/contacts-selectors";
import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
}
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape),
//   onDeleteContact: PropTypes.func.isRequired,
// };
