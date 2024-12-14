import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectCards } from "../../store/cards/selectors";
import { toggleModal } from "../../store/modal/slice";

function Header() {
	const cards = useSelector(selectCards);
	const dispatch = useDispatch();

	const addBtnHandler = () => {
		dispatch(toggleModal());
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
