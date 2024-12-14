import { useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import { HandlersContext } from "../../context/HandlersContext";

function Header() {
	const cards = useContext(CardsContext);
	const { addBtnHandler } = useContext(HandlersContext);

	return (
		<header className="app-header d-flex justify-content-between">
			<h1 className="text-center">App</h1>

			<p>Cards count: {cards.length}</p>

			<button type="button" className="btn btn-success" onClick={addBtnHandler}>
				Add
			</button>
		</header>
	);
}

export default Header;
