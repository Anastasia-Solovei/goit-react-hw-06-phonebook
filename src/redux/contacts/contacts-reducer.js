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
  [checkUniqueContact]: (state, { payload }) => {},
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
