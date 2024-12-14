import { Component } from "react";

class Button extends Component {
	constructor({ title, onClick }) {
		super();

		this.title = title;
		this.onClick = onClick;
	}

	render() {
		return <button onClick={this.onClick}>{this.title}</button>;
	}
}

export default Button;
