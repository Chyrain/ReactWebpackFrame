// card.test.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import jasmineReact from 'jasmine-react-helpers';
import Greeter from '../app/components/greeter/Greeter.jsx';

describe('Greeter component', function() {
	let greeter;
	const content = {
		todolist: ['hello', 'world', 'click', 'me']
	};

	afterEach(function() {
		console.log('afterEach unmountComponentAtNode ->', greeter);//////
		// ReactDOM.unmountComponentAtNode(greeter);
	});

	it('should exists', function() {
		greeter = ReactTestUtils.renderIntoDocument(<Greeter todolist={content.todolist}></Greeter>);
		console.log('ReactDOM.findDOMNode(greeter).textContent ->', ReactDOM.findDOMNode(greeter).textContent);//////
		expect(!!ReactDOM.findDOMNode(greeter)).toBe(true);
	});

	it('should have correct structure', function() {
		greeter = ReactTestUtils.renderIntoDocument(<Greeter todolist={content.todolist}></Greeter>);
		var domContent = ReactDOM.findDOMNode(greeter).textContent;
		expect(domContent).toContain("init");
		expect(domContent).toContain("Clicks");
		expect(domContent).toContain("Add Item");
		expect(domContent).toContain("hello");
		expect(domContent).toContain("world");
		expect(domContent).toContain("click");
		expect(domContent).toContain("me");
	});
})
