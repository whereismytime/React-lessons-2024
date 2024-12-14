import { useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function CardDetails() {
	const { cards } = useContext(CardsContext);
	let { id } = useParams();

	const card = cards.find((el) => el.id === Number(id));
	const { title, url } = card;

	return (
		<div className="container">
			<div className="row">
				<Breadcrumbs />
			</div>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-5">
						<img
							src={url}
							className="img-fluid rounded-start"
							alt={title}
							height="400"
							style={{ width: "100%", objectFit: "cover" }}
						/>
					</div>
					<div className="col-7">
						<div className="card-body text-bg-info" style={{ height: "100%" }}>
							<h5 className="card-title fs-1">{title}</h5>

							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Excepturi sapiente totam ratione officia hic eaque dolor
								voluptatem cupiditate iste, exercitationem tempora reiciendis
								nulla fugiat veniam ad, error amet nihil fuga! Cum, obcaecati
								laudantium? Pariatur quidem dolorem deserunt. Incidunt rerum
								aperiam et expedita, totam unde numquam facere beatae excepturi
								eius officia laudantium adipisci nihil nobis sit repellendus
								atque eaque! Amet, magni? Praesentium nulla magnam doloremque
								amet tempora, fugiat fugit nesciunt nemo. Dolore incidunt esse
								est inventore vero temporibus, iste porro quasi minus doloribus?
								At alias officiis quo aliquid quaerat maiores distinctio.
								Exercitationem facere ipsa quos saepe, quo error est nostrum
								dolorum odio culpa nulla sequi dolor tempore soluta atque
								commodi quis, maxime necessitatibus iste obcaecati labore
								perferendis magni? Adipisci, dolorum iste. Voluptas accusamus
								alias aliquam, hic architecto aperiam voluptates magnam,
								quibusdam dolorum accusantium laborum quasi incidunt voluptatem
								distinctio at velit neque fugit fuga, molestiae ullam eos
								adipisci culpa. Veritatis, libero quidem. Aut mollitia neque
								necessitatibus, impedit, laudantium minima dolor molestiae
								dignissimos debitis sequi eaque, quod perspiciatis distinctio
								aperiam dicta maiores asperiores velit quae nulla enim deleniti
								temporibus? Autem eaque repellat iste! Veniam dicta voluptates
								explicabo, earum non officiis. Quisquam est aliquid labore et
								voluptatum? Natus, exercitationem quos! Quas saepe facilis fuga
								eligendi architecto ipsam, odit ab fugit at id neque debitis.
								Maiores nostrum dolorum esse maxime suscipit quis itaque
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
