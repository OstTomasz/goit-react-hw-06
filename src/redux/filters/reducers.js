import { FILTER_CONTACTS, initialState } from "./constants";

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      console.log(action.payload);
      return {
        contacts: {
          items: state.contacts.items.filter((contact) =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
        filters: { name: action.payload },
      };
    default:
      return state;
  }
};
