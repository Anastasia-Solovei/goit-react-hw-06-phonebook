import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  changeFilter,
  checkUniqueContact,
} from "./contacts-actions";

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  // [checkUniqueContact]: (state, { payload }) => {
  //   const isExistContact = !!state.find((item) => item.name === payload);
  //   isExistContact && alert("Contact is already exist!");
  //   return !isExistContact;
  // },
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
