import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HandlersContext } from "../../context/HandlersContext";

import styles from "./index.module.css";

function Card({ photo }) {
	const { thumbnailUrl, title, url, id } = photo;

	const [isDisabled, setIsDisabled] = useState(false);
	const { deleteCard } = useContext(HandlersContext);

	let location = useLocation();

	const disableHandler = () => {
		setIsDisabled(!isDisabled);
	};

	const deleteHandler = () => {
		deleteCard(id);
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
					onClick={deleteHandler}
				>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Card;
