import React from 'react';
import Card from '../components/card/Card.jsx';
import Greeter from '../components/greeter/Greeter.jsx';
import Counter from '../components/counter/Counter.jsx';
import MixinBinding from '../components/mixins/MixinBinding.jsx';
import TodoList from '../components/todos/TodoList.jsx';

class Example extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {text: ''};
	}
	componentDidMount() {
		console.log('Example => componentDidMount');
	}
	componentWillUnmount() {
		console.log('Example => componentWillUnmount');
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('Greeter => shouldComponentUpdate =>', nextState.text != this.state.text);
	// 	return nextState.text != this.state.text;
	// }
	componentDidUpdate() {
		console.log('Example => componentDidUpdate', (new Date()).getTime());
	}
	render() {
		console.log('Example => render', (new Date()).getTime());//////
		return (
			<div className="box">
				<Greeter title="Greeter" />
				<Card title="Card" />
				<Counter title="Counter" />
				<MixinBinding text="init" title="MixinBinding" />
				<TodoList items={["aa", "bb", "cc"]} title="TodoList" />
				<img src={require('./dog.jpeg')} title="img:dog.jpeg" />
			</div>
		)
		
				// <img src={require('./pig.jpg')} title="img:pig.jpg" />
				// <img src={require('./timg.jpeg')} title="img:timg.jpeg" />
	}
}

export default Example