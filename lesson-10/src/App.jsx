import Modal from "./components/Modal";
import Form from "./components/Form";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { selectIsOpen } from "./store/modal/selectors";

function App({ children }) {
	const modal = useSelector(selectIsOpen);

	return (
		<>
			<Header />

			{children}

			{modal && (
				<Modal>
					<Form />
				</Modal>
			)}
		</>
	);
}

export default App;
