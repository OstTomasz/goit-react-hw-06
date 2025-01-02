import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, DELETE_CONTACT } from "./contactsConstants";

export const addContact = (values) => ({
  type: ADD_CONTACT,
  payload: { id: uuidv4(), name: values.name, number: values.number },
});
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
