/**
 * Created by xuan on 16/4/15.
 */

var http = require('http');
var express = require('express');
var app = express();
var logger=require('morgan');
var compression=require('compression');
var path=require('path');
// var configureStore=require('./src/store/configureStore')

app.use(compression());
app.use(logger('short'));
app.use(express.static(path.join(__dirname, 'public')));

(function initWebpack() {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
})();


app.get('/*', function root(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 8081
app.listen(PORT, function() {
    console.log('Trips server running at localhost:' + PORT)
})
