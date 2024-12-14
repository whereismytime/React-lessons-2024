import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CardsContext } from "../../context/CardsContext";
import { ModalContext } from "../../context/ModalContext";

function Header() {
	const { cards } = useContext(CardsContext);
	const { setModal } = useContext(ModalContext);

	const addBtnHandler = () => {
		setModal(true);
	};

	return (
		<header className="app-header d-flex justify-content-between">
			<div className="container">
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<Link className="navbar-brand" to="/">
						App
					</Link>

					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-link" aria-current="page" to="/">
								Home
							</NavLink>
							<NavLink className="nav-link" to="/cards">
								Cards
							</NavLink>

							{cards.length !== 0 ? (
								<NavLink className="nav-link" to="/statistics">
									Statistics
								</NavLink>
							) : null}

							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link" to="/contacts">
								Contacts
							</NavLink>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-success"
						onClick={addBtnHandler}
					>
						Add
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Header;
