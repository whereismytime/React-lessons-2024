import { useState } from "react";
import "./index.css";

function Card({ photo, deleteCard, showImage }) {
	const { thumbnailUrl, title, url, id } = photo;

	const [isDisabled, setIsDisabled] = useState(false);

	const disableHandler = () => {
		setIsDisabled(!isDisabled);
	};

	const deleteHandler = () => {
		deleteCard(id);
	};

	const onClickHandler = (evt) => {
		evt.preventDefault();
		showImage(url);
	};

	return (
		<div className={`card col-4 px-0 ${isDisabled ? "card--disabled" : ""}`}>
			<img src={thumbnailUrl} className="card-img-top" alt="..." height="200" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>

				<a href={url} className="btn btn-primary" onClick={onClickHandler}>
					Show
				</a>

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
