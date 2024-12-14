import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		setCards(state, action) {
			state.data = action.payload;
		},
		toggleErrorState(state) {
			state.isError = !state.isError;
		},
		toggleLoadingState(state) {
			state.isLoading = !state.isLoading;
		},
	},
});

export const { setCards, toggleErrorState, toggleLoadingState } =
	cardsSlice.actions;

export default cardsSlice.reducer;
