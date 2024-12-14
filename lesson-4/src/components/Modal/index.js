import { useEffect, useRef } from "react";
import "./index.css";

function Modal({ openModal, setModal, children }) {
	const modalRef = useRef();

	const modalCloseHandler = () => {
		setModal(false);
		modalRef.current.close();
	};

	useEffect(() => {
		if (openModal) {
			modalRef.current?.showModal();
		}
	}, [openModal]);

	return (
		<dialog
			className="modal"
			ref={modalRef}
			onCancel={modalCloseHandler}
			aria-modal={openModal}
		>
			{children}
			<button
				type="button"
				className="modal__close"
				onClick={modalCloseHandler}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					className="bi bi-x-circle"
					viewBox="0 0 16 16"
				>
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
				</svg>
			</button>
		</dialog>
	);
}

export default Modal;
