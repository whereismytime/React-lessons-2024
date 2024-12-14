export const CARDS_TYPES = {
	GET_CARDS: "GET_CARDS",
	IS_LOADING: "IS_LOADING",
	IS_ERROR: "IS_ERROR",
};

export const setCards = (cards) => ({
	type: CARDS_TYPES.GET_CARDS,
	payload: cards,
});

export const toggleLoadingState = () => ({
	type: CARDS_TYPES.IS_LOADING,
});

export const toggleErrorState = () => ({
	type: CARDS_TYPES.IS_ERROR,
});
