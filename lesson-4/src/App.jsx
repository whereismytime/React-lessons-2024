import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { data } from "./data";

function App() {
	const [cards, setCards] = useState(data);
	const [modal, setModal] = useState(false);
	const [image, setImage] = useState(false);
	const [imageUrl, setImageUrl] = useState("");

	const deleteCard = (id) => {
		const tempCards = cards.filter((el) => el.id !== id);
		setCards(tempCards);
	};

	const addBtnHandler = () => {
		setModal(true);
	};

	const showImage = (url) => {
		setImageUrl(url);
		setImage(true);
	};

	return (
		<>
			<header className="app-header d-flex justify-content-between">
				<h1 className="text-center">App</h1>

				<button
					type="button"
					className="btn btn-success"
					onClick={addBtnHandler}
				>
					Add
				</button>
			</header>

			{image && (
				<Modal openModal={image} setModal={setImage}>
					<img
						src={imageUrl}
						style={{ backgroundColor: "#000", width: "100%", height: "100%" }}
					/>
				</Modal>
			)}

			{modal && (
				<Modal openModal={modal} setModal={setModal}>
					Add
				</Modal>
			)}

			<div className="container-fluid">
				<div className="row flex-wrap">
					{cards.map((photo) => {
						return (
							<Card
								photo={photo}
								key={photo.id}
								deleteCard={deleteCard}
								showImage={showImage}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
