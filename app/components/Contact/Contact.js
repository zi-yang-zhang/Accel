/**
 * Created by robert on 23/09/15.
 */
import React from 'react';
import { Jumbotron, Glyphicon, Button }from 'react-bootstrap';
import instagramLogo from '../../../assets/instagram_glyph.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

if (process.env.BROWSER) {
	require('./Contact.less');
}
export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ReactCSSTransitionGroup transitionName="mount-fade-in" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout ={500} transitionAppear={true}>

				<Jumbotron className="contact-content">
					<h3>To reach us:</h3>
					<p><Glyphicon glyph="earphone" className="glyph-margin"/><span>: <a href="tel:+416-667-9922">416-667-9922</a></span></p>
					<p><Glyphicon glyph="print" className="glyph-margin"/><span>: 416-67-9920</span></p>
					<p><Glyphicon glyph="envelope" className="glyph-margin"/><span>: <a href="mailto:accelauto@outlook.com">accelauto@outlook.com</a></span></p>
					<p><span>Check out our awesome pics: </span><a href="https://www.instagram.com/accelauto/"><img className="instagram-logo" src={instagramLogo} alt="Instagram"/></a></p>
				</Jumbotron>
			</ReactCSSTransitionGroup>
		);
	}
}

Contact.prototype.displayName = 'Contact';