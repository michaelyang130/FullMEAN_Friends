var express = require('express');
	bp = require('body-parser');
	mongoose = require('mongoose');
	root = __dirname,
    port = process.env.PORT || 3322,
	path = require('path');
	app = express();

//allow body parser to parse the json
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
	console.log('Listening on port ' + port);
})
