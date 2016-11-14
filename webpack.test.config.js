"use strict";

const webpack = require('webpack');
const argv = require('yargs').argv;
const confGenerator = require('./webpack.base.js');

const config = confGenerator({
	devtool: 'cheap-module-eval-source-map',
	outputPath: __dirname + '/test/build',
	tmplName: __dirname + '/test/index.tmpl.html'
});

if (/webpack-dev-server$/.test(argv.$0)) {
	config.entry = [
		'webpack-dev-server/client?http://0.0.0.0:' + config.devserver.port,
		'webpack/hot/only-dev-server',
		'./test/test'
	];
	config.plugins.push(new webpack.HotModuleReplacementPlugin()); //热加载插件
	config.output.filename = "[name]_[hash:10].js";
} else {
	config.entry = {test:[__dirname + "/test/test.jsx"]};
	config.output.filename = "[name]_[chunkhash:10].js";
}

module.exports = config;