/**
 * Created by robertzzy on 19/11/15.
 */
// NODE
import http from 'http';
import path from 'path';

// EXPRESS
import express from 'express';
import favicon from 'serve-favicon';

// Profile dev or production
let publicPath = 'dist';

let app = express();
let api = require('./api/index');

app.set('port', process.env.PORT || 3001);
app.use(express.static(publicPath));
app.use(favicon(path.join(__dirname, '../assets/favicon.ico')));
app.use(express.static('assets'));
app.use((req,res,next)=>{
	console.log(Date.now() + ": "+"Hit path=>" +req.path);
	next();
});
app.use(api);
http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});

