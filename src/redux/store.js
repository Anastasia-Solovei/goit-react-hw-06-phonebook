import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsInitialState = {
  items: [],
  filter: "",
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
