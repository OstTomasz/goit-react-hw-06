import { combineReducers } from "redux";
import { filtersReducer } from "./filters/reducers";
import { contactsReducer } from "./contacts/contactsReducers";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
