// Greeter.js
import React from 'react';
import config from './config.json';
import styles from './Greeter.styl';

class Greeter extends React.Component {
	constructor(props) {
		super(props);
		// this.mixins = [BindingMixin];
		// this.state = {text: ''};
	}
	componentDidMount() {
		v.logd('Greeter => componentDidMount');
	}
	componentWillUnmount() {
		v.logd('Greeter => componentWillUnmount');
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	v.logd('Greeter => shouldComponentUpdate =>', nextState.text != this.state.text);
	// 	return nextState.text != this.state.text;
	// }
	componentDidUpdate() {
		v.logd('Greeter => componentDidUpdate', (new Date()).getTime());
	}
	render() {
		v.logd('Greeter => render', (new Date()).getTime());//////
		return (
			<div className="box">
				<p>Hello:干嘛盯着我看。。。哩哩啦啦啊啊</p>
				{config.greetText}
			</div>
		)
	}
}

export default Greeter