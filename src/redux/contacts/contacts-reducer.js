import { combineReducers } from "redux";
import actionTypes from "./contacts-types";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => state;

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
