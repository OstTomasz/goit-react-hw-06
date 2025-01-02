import { configureStore, createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducers";

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// export const store = configureStore({
//   reducer: {}, // Add your reducers here
// });
