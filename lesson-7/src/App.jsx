import { Component, useState } from "react";
import Button from "./components/Button";

class App extends Component {
	// 	const [count, setCount] = useState(0);
	state = {
		count: 0,
		clickCount: 0,
	};

	appTitle = "Vite + React";

	increment = () =>
		this.setState({
			count: this.state.count + 1,
			clickCount: this.state.clickCount + 1,
		});

	decrement = () =>
		this.setState({
			count: this.state.count - 1,
			clickCount: this.state.clickCount + 1,
		});

	render() {
		return (
			<>
				<h1>{this.appTitle}</h1>
				<div className="card">
					<p>Current count: {this.state.count}</p>
					<p>You clicked {this.state.clickCount} times</p>

					<Button title="MINUS" onClick={this.decrement} />
					<Button title="PLUS" onClick={this.increment} />
				</div>
			</>
		);
	}
}

// function App() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<>
// 			<div>
// 				<a href="https://vite.dev" target="_blank">
// 					<img src={viteLogo} className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://react.dev" target="_blank">
// 					<img src={reactLogo} className="logo react" alt="React logo" />
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<div className="card">
// 				<button onClick={() => setCount((count) => count + 1)}>
// 					count is {count}
// 				</button>
// 				<p>
// 					Edit <code>src/App.jsx</code> and save to test HMR
// 				</p>
// 			</div>
// 			<p className="read-the-docs">
// 				Click on the Vite and React logos to learn more
// 			</p>
// 		</>
// 	);
// }

export default App;
