// Card.jsx
import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: 'Hello world'};
	}
	componentDidMount() {
		console.log('Card => componentDidMount');//////
	}
	componentWillUnmount() {
		console.log('Card => componentWillUnmount');//////
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('Card => shouldComponentUpdate =>', nextState.text != this.state.text);//////
		return nextState.text != this.state.text;
	}
	componentDidUpdate() {
		console.log('Card => componentDidUpdate', (new Date()).getTime());//////
	}
	render() {
		console.log('Card => render', (new Date()).getTime());//////
		return (
			<div className="card">
				{this.state.text}
			</div>
		);
	}
}

export default Card