/**
 * Created by robert on 30/09/15.
 */

import React from 'react';
import { Jumbotron }from 'react-bootstrap';

if (process.env.BROWSER) {
	require('./Service.less');
}
export default class Service extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Jumbotron className="service-content">
				<h1>Our service:</h1>
				<h3>maintenance, repair,</h3>
				<h3>window tint, car wrap, performance parts, 3D wheel alignment,</h3>
				<h3>safety inspection, computer check up, paint protection,</h3>
				<h3>modification, auto body.</h3>
			</Jumbotron>
		);
	}
}

Service.prototype.displayName = 'Service';
