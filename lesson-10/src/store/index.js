import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import cardsReducer from "./cards/slice";
import modalReducer from "./modal/slice";

const store = configureStore(
	{
		reducer: {
			cards: cardsReducer,
			modal: modalReducer,
		},
	},
	composeWithDevTools()
);

export default store;
