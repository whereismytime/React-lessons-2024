import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./index.module.css";
import { deleteCards } from "../../api";
import { selectCards } from "../../store/cards/selectors";
import { setCards } from "../../store/cards/actions";

function Card({ photo }) {
	const { thumbnailUrl, title, id } = photo;

	const [isDisabled, setIsDisabled] = useState(false);
	const cards = useSelector(selectCards);

	let location = useLocation();
	const dispatch = useDispatch();

	const disableHandler = () => {
		setIsDisabled(!isDisabled);
	};

	const deleteCard = (id) => {
		deleteCards(id)
			.then(({ status }) => {
				if (status === 200) {
					const tempCards = cards.filter((el) => el.id !== id);
					dispatch(setCards(tempCards));
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div
			className={`card col-4 px-0 ${isDisabled ? styles.cardDisabled : null}`}
		>
			<img src={thumbnailUrl} className="card-img-top" alt="..." height="200" />
			<div className="card-body">
				<h5 className="card-title">
					{title} - {id}
				</h5>

				<Link to={location.pathname + "/" + id} className="btn btn-primary">
					Show
				</Link>

				<button
					type="button"
					className={`btn ${isDisabled ? "btn-success" : "btn-secondary"}`}
					onClick={disableHandler}
				>
					{isDisabled ? "Enable" : "Disable"}
				</button>

				<button
					type="button"
					className="btn btn-danger"
					onClick={() => deleteCard(id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Card;
