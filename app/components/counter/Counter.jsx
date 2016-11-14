import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
	}
	componentDidMount() {
		v.logd('Counter => componentDidMount');
	}
	componentWillUnmount() {
		v.logd('Counter => componentWillUnmount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		v.logd('Counter => shouldComponentUpdate =>', nextState.count != this.state.count);
		return nextState.count != this.state.count;
	}
	componentDidUpdate() {
		v.logd('Counter => componentDidUpdate', (new Date()).getTime());
	}
	tick() {
		this.setState({count: this.state.count + 1});
	}
	render() {
		v.logd('Counter => render', (new Date()).getTime());//////
		return (
			<div className="box" onClick={this.tick.bind(this)}>
				Clicks: {this.state.count}
			</div>
		);
	}
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };

export default Counter