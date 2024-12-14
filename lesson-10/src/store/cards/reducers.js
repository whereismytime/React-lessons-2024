import { CARDS_TYPES } from "./actions";

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CARDS_TYPES.GET_CARDS:
			return {
				...state,
				cards: action.payload,
			};

		case CARDS_TYPES.IS_ERROR:
			return {
				...state,
				isError: !state.isError,
			};

		case CARDS_TYPES.IS_LOADING:
			return {
				...state,
				isLoading: !state.isLoading,
			};

		default:
			return state;
	}
};
