import { useState } from "react";

import CardsContextProvider from "./context/CardsContext";
import { ModalContext } from "./context/ModalContext";
import { HandlersContext } from "./context/HandlersContext";

import Modal from "./components/Modal";
import Form from "./components/Form";
import Section from "./components/Section";
import Header from "./components/Header";

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
			<CardsContextProvider value={cards}>
				<ModalContext.Provider value={{ modal, setModal }}>
					<HandlersContext.Provider
						value={{ deleteCard, addCard, addBtnHandler, showImage }}
					>
						<Header />

						{image && (
							<Modal openModal={image} setModal={setImage}>
								<img
									src={imageUrl}
									style={{
										backgroundColor: "#000",
										width: "100%",
										height: "100%",
									}}
								/>
							</Modal>
						)}

						{modal && (
							<Modal>
								<Form />
							</Modal>
						)}

						<Section />
					</HandlersContext.Provider>
				</ModalContext.Provider>
			</CardsContextProvider>
		</>
	);
}

export default App;
