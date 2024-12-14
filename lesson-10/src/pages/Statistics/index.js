import { useSelector } from "react-redux";
import { selectCards } from "../../store/cards/selectors";

export default function Statistics() {
	const cards = useSelector(selectCards);

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center fs-1">Statistics</h1>

				<div className="fs-3">
					<strong>Cards count: {cards.length || 0}</strong>
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam
					quidem incidunt voluptatem corporis porro eos cum natus unde iure ex
					accusamus reiciendis, magnam eum consequuntur quibusdam pariatur
					doloremque laboriosam.
				</div>
			</div>
		</div>
	);
}
