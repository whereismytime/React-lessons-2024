import { useContext, useEffect, useState } from "react";
import Card from "../Card";
import { CardsContext } from "../../context/CardsContext";
import { getCards } from "../../api";

function CardList() {
	const { cards, setCards } = useContext(CardsContext);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			getCards()
				.then(({ data }) => {
					const newData = data.slice(0, 30);
					setCards(newData);
					setIsLoading(false);
				})
				.catch((err) => {
					setIsError(err.message);
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
