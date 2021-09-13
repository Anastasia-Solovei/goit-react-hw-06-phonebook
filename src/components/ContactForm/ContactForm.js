import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";

import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState("name", "");
  const [number, setNumber] = useState("number", "");

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  // const checkUniqueContact = (items) => {
  //   const isExistContact = !!items.find((contact) => contact.name === name);

  //   isExistContact && alert("Contact is already exist!");

  //   return !isExistContact;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const isValidatedForm = uniqueContact;
    // if (!isValidatedForm) {
    //   return;
    // }

    //isValidatedForm &&
    onAdd({ id: uuidv4(), name: name, number: number });
    setName("");
    setNumber("");
  };

  return (
    <form className={s.ContactForm} onSubmit={handleSubmit}>
      <div className={s.InputOverlay}>
        <label className={s.InputLabel} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={s.Input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={nameInputId}
          required
        />
      </div>

      <div className={s.InputOverlay}>
        <label className={s.InputLabel} htmlFor={numberInputId}>
          Number
        </label>
        <input
          className={s.Input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={numberInputId}
          required
        />
      </div>

      <button className={s.FormButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  //checkUniqueContact: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   uniqueContact: checkUniqueContact(state.contacts.items),
// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsActions.addContact(contact)),
  // checkUniqueContact: (name) =>
  //   dispatch(contactsActions.checkUniqueContact(name)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
