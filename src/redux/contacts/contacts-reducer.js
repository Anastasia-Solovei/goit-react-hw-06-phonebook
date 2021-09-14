import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contacts-actions";

const initialState = [
  { id: "id-1", name: "Inna Palchynska", number: "459-12-56" },
  { id: "id-2", name: "Halyna Sinko", number: "443-89-12" },
  { id: "id-3", name: "Dariia Nikolaieva", number: "645-17-79" },
  { id: "id-4", name: "Sergiy Prodan", number: "227-91-26" },
];

const items = createReducer(initialState, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
