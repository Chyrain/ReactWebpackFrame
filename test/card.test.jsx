// card.test.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import jasmineReact from 'jasmine-react-helpers';
import Card from '../app/components/card/Card.jsx';

describe('Card component', function() {
	var blocks = [
		{
			title: "Obama",
			subtitle: "president",
			text: "I love China",
			link: ["http://www.chyrain.com", "www.v5kf.com"]
		}
	];
	var header = "总统";
	var footer = "由xxx统计";
	var listGroup = ["我是第一届美国黑人总统", "我喜欢中国"];
	var imgTop = {
		url: "http://d.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=80e331b33f12b31bc76cca2fbe235147/9c16fdfaaf51f3de47e1149092eef01f3b2979f7.jpg",
		alt: "奥巴马头像"
	};
	var imgBottom = {
		url: "https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2667719702,1905615251&fm=85&s=D42EFF5A1F0326C4A66C281A030040D3",
		alt: "奥巴马头像"
	};

	let card;
	const content = {
		blocks: blocks,
		header: header,
		footer: footer,
		listGroup: listGroup,
		imgTop: imgTop,
		imgBottom: imgBottom
	};

	afterEach(function() {
		console.log('afterEach unmountComponentAtNode ->', card);//////
		// ReactDOM.unmountComponentAtNode(card);
	});

	it('should exists', function() {
		card = ReactTestUtils.renderIntoDocument(<Card conten={content}></Card>);
		console.log('ReactDOM.findDOMNode(card).textContent ->', ReactDOM.findDOMNode(card).textContent);//////
		expect(!!ReactDOM.findDOMNode(card)).toBe(true);
	});

	it('should have correct structure', function() {
		card = ReactTestUtils.renderIntoDocument(<Card content={content}></Card>);
		var domContent = ReactDOM.findDOMNode(card).textContent;
		expect(domContent).toContain("Obama");
		expect(domContent).toContain("总统");
		expect(domContent).toContain("统计");
		expect(domContent).toContain("黑人总统");
		expect(domContent).toContain("奥巴马头像");
	});
})
