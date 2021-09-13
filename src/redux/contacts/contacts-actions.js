import actionTypes from "../contacts/contacts-types";

export const addContact = ({ id, name, number }) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: id,
    name: name,
    number: number,
  },
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
});

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});
