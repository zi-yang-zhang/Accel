/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';

if (process.env.BROWSER) {
	require('./Header.less');
}
export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='mdl-tabs mdl-js-tabs mdl-js-ripple-effect'>
				<div className="mdl-tabs__tab-bar">
					<a href="#home" className="mdl-tabs__tab is-active">Home</a>
					<a href="#contact" className="mdl-tabs__tab">Contact</a>
					<a href="#service" className="mdl-tabs__tab">Service</a>
					<a href="#gallery" className="mdl-tabs__tab">Gallery</a>
					<a href="#about" className="mdl-tabs__tab">About</a>
				</div>
			</div>
		);
	}
}


Header.prototype.displayName = 'Header';
