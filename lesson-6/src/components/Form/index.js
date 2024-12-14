import { useRef } from "react";

function Form({ addCard, setModal }) {
	const formRef = useRef();
	const submitHandler = (evt) => {
		evt.preventDefault();

		const form = evt.target;
		//* const form = formRef.current;

		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		addCard(formJson);

		setModal(false);
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
// https://static.toiimg.com/thumb/110965104/Water-bodies.jpg?width=636&height=358&resize=4
