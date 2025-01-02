import { FILTER_CONTACTS } from "./constants";

export const filterContacts = (name) => ({
  type: FILTER_CONTACTS,
  payload: name,
});
