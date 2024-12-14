import { useState } from "react";

import CardsContextProvider from "./context/CardsContext";
import { ModalContext } from "./context/ModalContext";

import Modal from "./components/Modal";
import Form from "./components/Form";
import Header from "./components/Header";

function App({ children }) {
	const [cards, setCards] = useState([]);
	const [modal, setModal] = useState(false);

	return (
		<>
			<CardsContextProvider value={{ cards, setCards }}>
				<ModalContext.Provider value={{ modal, setModal }}>
					<Header />

					{children}

					{modal && (
						<Modal>
							<Form />
						</Modal>
					)}
				</ModalContext.Provider>
			</CardsContextProvider>
		</>
	);
}

export default App;
