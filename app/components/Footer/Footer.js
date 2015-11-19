/**
 * Created by robert on 23/09/15.
 */
import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem }from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

if (process.env.BROWSER) {
	require('./Footer.less');
}

export default class Footer extends React.Component {
	constructor() {
		super();
	}

	render(){
		return(
			<footer>
				<p>test</p>
			</footer>
		);
	}

}

Footer.prototype.displayName = 'Footer';
