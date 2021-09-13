// import actionTypes from "../contacts/contacts-types";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contactList/addContact");
export const deleteContact = createAction("contactList/deleteContact");
export const changeFilter = createAction("contactList/changeFilter");
export const checkUniqueContact = createAction(
  "contactList/checkUniqueContact"
);
