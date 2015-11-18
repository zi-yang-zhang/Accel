/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem }from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../../../assets/logo.jpg';

if (process.env.BROWSER) {
	require('./Header.less');
}
export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Navbar>
				<Nav>
					<LinkContainer to="/home">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/contact">
						<NavItem>Contact</NavItem>
					</LinkContainer>
					<LinkContainer to="/service" >
						<NavItem>Service</NavItem>
					</LinkContainer>
					<LinkContainer to="/gallery">
						<NavItem>Gallery</NavItem>
					</LinkContainer>
					<LinkContainer to="/about" >
						<NavItem>About</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}


Header.prototype.displayName = 'Header';
