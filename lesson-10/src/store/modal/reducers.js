import { MODAL_TYPES } from "./actions";

const initialState = {
	isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case MODAL_TYPES.TOGGLE_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
			};

		default:
			return state;
	}
};
