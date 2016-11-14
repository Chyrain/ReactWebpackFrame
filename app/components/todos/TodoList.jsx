import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: props.items ||[]};
		this.handleAdd = this.handleAdd.bind(this);
	}
	componentDidMount() {
		v.logd('TodoList => componentDidMount');
	}
	componentWillUnmount() {
		v.logd('TodoList => componentWillUnmount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		v.logd('TodoList => shouldComponentUpdate =>', nextState.items != this.state.items);
		return nextState.items != this.state.items;
	}
	componentDidUpdate() {
		v.logd('TodoList => componentDidUpdate', (new Date()).getTime());
	}

	handleAdd() {
		const newItems = this.state.items.concat([
			prompt('Enter some text')
		]);
		this.setState({items: newItems});
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}

	render() {
		const items = this.state.items.map((item, i) => (
			<div className="box" key={item} onClick={() => this.handleRemove(i)}>
				{item}
			</div>
		));
		v.logd('TodoList => render', (new Date()).getTime());//////
		return (
			<div>
			<button onClick={this.handleAdd}>Add Item</button>
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
				{items}
			</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default TodoList