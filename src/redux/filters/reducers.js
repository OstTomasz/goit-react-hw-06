import { FILTER_CONTACTS, initialState } from "./constants";

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      console.log(action.payload);
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};
