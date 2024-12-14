import { useState } from "react";
import "./index.css";

function Card({ photo }) {
	// const photo = props.photo;
	// const { photo } = props;
	const { thumbnailUrl, title, url } = photo;

	// let isDisabled = false;
	const [isDisabled, setIsDisabled] = useState(false);

	const disableHandler = () => {
		// isDisabled = !isDisabled;
		setIsDisabled(!isDisabled);
	};

	return (
		<div className={`card col-4 px-0 ${isDisabled ? "card--disabled" : ""}`}>
			<img src={thumbnailUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>

				<a href={url} className="btn btn-primary">
					Show
				</a>

				<button
					type="button"
					className={`btn ${isDisabled ? "btn-success" : "btn-secondary"}`}
					onClick={disableHandler}
				>
					{isDisabled ? "Enable" : "Disable"}
				</button>
			</div>
		</div>
	);
}

export default Card;
