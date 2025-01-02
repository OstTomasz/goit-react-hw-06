import { ADD_CONTACT, DELETE_CONTACT, initialState } from "./constants";

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_CONTACT:
      return {
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};
