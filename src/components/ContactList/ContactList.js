import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/contacts/contacts-actions";
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

  console.log(filteredContacts);

  // const filteredContacts = () => {
  //   if (filter) {
  //     const normalizedFilter = filter.toLowerCase();
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  //   return contacts;
  // };

  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  if (filteredContacts.length === 0) return null;

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
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
