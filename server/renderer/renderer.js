/**
 * Created by robertzzy on 02/12/15.
 */
// NODE
import fs from 'fs';

// EXTERNALS
import _ from 'lodash';
import Helmet from 'react-helmet';
import Iso from 'iso';
import React from 'react';
import  ReactDOMServer  from 'react-dom/server'
import { match, RoutingContext } from 'react-router'

// CORE
import routes from '../../app/routes';
import alt from '../../app/alt';

let html = '';

var renderer = {
	//init: (type) => {
	//	html = type === 'dev' ?
	//		fs.readFileSync('./assets/index-dev.html', {encoding: 'utf8'})
	//		:
	//		fs.readFileSync('./dist/index-prod.html', {encoding: 'utf8'});
	//},
	render: (req, res, next) => {
		html = fs.readFileSync('./template/index-dev.html', {encoding: 'utf8'})

		let markup = '',
			iso = new Iso();

		const oneItemBootstraped = {
			'HomePagePictureStore': {
				'pictures': ['http://127.0.0.1:3000/image/1.jpg','http://127.0.0.1:3000/image/2.jpg','http://127.0.0.1:3000/image/3.jpg','http://127.0.0.1:3000/image/4.jpg','http://127.0.0.1:3000/image/5.jpg']
			}
		};

		/* This is where the magic happens, we take the locals data we have already
		 fetched and seed our stores with data.
		 Next we use react-router to run the URL that is provided in routes.jsx
		 Finally we use iso in order to render this content so it picks back up
		 on the client side and bootstraps the stores.
		 init server renderer
		 */
		alt.bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));
		match({routes, location:req.url}, (error, redirectionLocation, renderProps)=>{
		console.log("renderProps: "+renderProps);
			if(error){
				res.status(500).send(error.message)
			}else if(redirectionLocation){
				res.redirect(redirectLocation.pathname + redirectLocation.search)
			}else if(renderProps){
				let content = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
				iso.add(content, alt.flush());
				res.contentType = 'text/html; charset=utf8';
				let markupContent = iso.render();
				let head = Helmet.rewind();
				markup = html.replace('META', head.meta).replace('TITLE', head.title).replace('LINK', head.link).replace('CONTENT', markupContent);
				// SEND response
				res.send(markup);
			} else{
				res.status(404).send('Not Found')
			}
		})

	}
};

export default renderer;