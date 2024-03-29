var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/comments");

require('./models/comments_model.js');
require('./models/photo_model.js');
require('./models/page_model.js');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser());
require('./comment_routes')(app);
app.listen(8080);