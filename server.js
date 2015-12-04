var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')

var app = express()

var compiler = webpack(config)
var options = {
  noInfo: false,
  quiet: false,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}

app.use(webpackDevMiddleware(compiler, options))
app.use(webpackHotMiddleware(compiler))

app.get('*', function (req, res) {
  res.redirect('/static/')
})

var port = require('./config').port || 8080

app.listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost: %d', port)
})
