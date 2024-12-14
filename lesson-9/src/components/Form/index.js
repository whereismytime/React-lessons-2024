import { useContext, useRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import { CardsContext } from "../../context/CardsContext";
import { createCards } from "../../api";

function Form() {
	const { setModal } = useContext(ModalContext);
	const { setCards } = useContext(CardsContext);

	const formRef = useRef();

	const submitHandler = (evt) => {
		evt.preventDefault();

		const form = evt.target;
		//* const form = formRef.current;

		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		createCards(formJson)
			.then(({ data }) => {
				setCards((prevState) => [...prevState, data]);
				setModal(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<form ref={formRef} onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="card-url" className="form-label">
					Image url
				</label>
				<input
					type="text"
					name="thumbnailUrl"
					className="form-control"
					id="card-url"
					defaultValue={
						"https://static.toiimg.com/thumb/110965104/Water-bodies.jpg?width=636&height=358&resize=4"
					}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="card-big-url" className="form-label">
					Big image url
				</label>
				<input
					type="text"
					name="url"
					className="form-control"
					id="card-big-url"
					defaultValue={
						"https://static.toiimg.com/thumb/110965104/Water-bodies.jpg?width=636&height=358&resize=4"
					}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="card-title" className="form-label">
					Title
				</label>
				<input
					type="text"
					name="title"
					className="form-control"
					id="card-title"
					defaultValue={"Sea"}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Add
			</button>
		</form>
	);
}

export default Form;
