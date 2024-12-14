import Card from "./components/Card";
import { data } from "./data";

function App() {
	return (
		<>
			<h1 className="text-center">App</h1>

			<div className="container-fluid">
				<div className="row">
					{data.map((photo) => {
						return <Card photo={photo} key={photo.id} />;
					})}
				</div>
			</div>
		</>
	);
}

export default App;
