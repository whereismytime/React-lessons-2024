import { useContext } from "react";
import Card from "../Card";
import { CardsContext } from "../../context/CardsContext";

function CardList() {
	const cards = useContext(CardsContext);

	return (
		<div className="cardList">
			<div className="row flex-wrap">
				{cards.map((photo) => (
					<Card key={photo.id} photo={photo} />
				))}
			</div>
		</div>
	);
}

export default CardList;
