/**
 * Created by robert on 30/09/15.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
			<ReactCSSTransitionGroup transitionName="mount-fade-in" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout ={500} transitionAppear={true}>
				<div>
					<Jumbotron className="service-content">
						<h2>Our service:</h2>
						<h4>maintenance, repair,</h4>
						<h4>window tint, car wrap, performance parts, 3D wheel alignment,</h4>
						<h4>safety inspection, computer check up, paint protection,</h4>
						<h4>modification, auto body.</h4>
					</Jumbotron>
				</div>
			</ReactCSSTransitionGroup>


		);
	}
}

Service.prototype.displayName = 'Service';
Service.propTypes = {active: React.PropTypes.bool};
Service.defaultProps = {active: false};
