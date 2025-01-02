import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/reducers";
import { filtersReducer } from "./filters/reducers";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
