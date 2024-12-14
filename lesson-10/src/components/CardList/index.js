import { useEffect } from "react";
import Card from "../Card";
import { getCards } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCards,
	selectIsError,
	selectIsLoading,
} from "../../store/cards/selectors";
import {
	setCards,
	toggleErrorState,
	toggleLoadingState,
} from "../../store/cards/slice";

function CardList() {
	const isLoading = useSelector(selectIsLoading);
	const isError = useSelector(selectIsError);
	const cards = useSelector(selectCards);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(toggleLoadingState());

		setTimeout(() => {
			getCards()
				.then(({ data }) => {
					const newData = data.slice(0, 30);
					dispatch(setCards(newData));
					dispatch(toggleLoadingState());
				})
				.catch(() => {
					dispatch(toggleErrorState());
					dispatch(toggleLoadingState());
				});
		}, 1000);
	}, []);

	return (
		<>
			{isLoading && !isError && (
				<div className="loader text-center my-4">
					<div
						className="spinner-grow"
						style={{ width: "3rem", height: "3rem" }}
						role="status"
					>
						<span className="visually-hidden">Loading...</span>
					</div>
					<div role="status">Loading...</div>
				</div>
			)}

			{!isLoading && !isError && (
				<div className="cardList">
					<div className="row flex-wrap">
						{cards.map((photo) => (
							<Card key={photo.id} photo={photo} />
						))}
					</div>
				</div>
			)}

			{isError && (
				<div className="alert alert-danger text-center" role="alert">
					{isError}
				</div>
			)}
		</>
	);
}

export default CardList;
