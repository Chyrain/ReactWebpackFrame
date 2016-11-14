import React from 'react';

// var BindingMixin = {
// 	handleChange: function(key) {
// 		var that = this;
// 		var newState = {};
// 		return function(event) {
// 			newState[key] = event.target.value;
// 			that.setState(newState);
// 		}
// 	}
// };

class MixinBinding extends React.Component {
	constructor(props) {
		super(props);
		// this.mixins = [BindingMixin];
		this.state = {text: props.text};
	}
	handleChange(key) {
		var that = this;
		var newState = {};
		return function(event) {
			newState[key] = event.target.value;
			that.setState(newState);
		}
	}
	componentDidMount() {
		v.logd('MixinBinding => componentDidMount');
	}
	componentWillUnmount() {
		v.logd('MixinBinding => componentWillUnmount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		v.logd('MixinBinding => shouldComponentUpdate =>', nextState.text != this.state.text);
		return nextState.text != this.state.text;
	}
	componentDidUpdate() {
		v.logd('MixinBinding => componentDidUpdate', (new Date()).getTime());
	}
	render() {
		v.logd('MixinBinding => render', (new Date()).getTime());//////
		return (
			<div className='box'>
				<input type="text" placeholder="Please Input..." value={this.state.text} onChange={this.handleChange('text')} />
				<h3 style={{color: '#666'}}>{this.state.text}</h3>
			</div>
		)
	}
}

export default MixinBinding