import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { data } from "./data";
import Form from "./components/Form";

function App() {
	const [cards, setCards] = useState(data);
	const [modal, setModal] = useState(false);
	const [image, setImage] = useState(false);
	const [imageUrl, setImageUrl] = useState("");

	// console.log(cards);

	const deleteCard = (id) => {
		const tempCards = cards.filter((el) => el.id !== id);
		setCards(tempCards);
	};

	const addCard = (newCard) => {
		const ids = cards.map((el) => el.id);
		console.log(ids);

		const maxID = Math.max(...ids);
		console.log(maxID);

		newCard.id = maxID + 1;
		setCards((prevState) => [...prevState, newCard]);
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
					<Form addCard={addCard} setModal={setModal} />
				</Modal>
			)}

			<div className="container-fluid">
				<div className="row flex-wrap">
					{cards.map((photo) => (
						<Card
							key={photo.id}
							photo={photo}
							deleteCard={deleteCard}
							showImage={showImage}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
