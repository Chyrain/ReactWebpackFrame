// use 'esversion:6'
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import Example from './containers/Example.jsx';

import './index.css'; //使用require导入css文件

window.v = {};
v.logd = function (...args) {
	console.log(...args);
}
v.logi = function (...args) {
	console.info(...args);
}
v.logw = function (...args) {
	console.warn(...args);
}
v.loge = function(...args) {
	console.error(...args);
}
v.dir = function(...args) {
	console.dir(...args);
}

ReactDOM.render(
	<div>
		<Example/>
	</div>
	, document.getElementById('root'));
