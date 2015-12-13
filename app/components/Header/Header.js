/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavBrand }from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../../assets/logo.png';

import ReactDOM from "react-dom"

if (process.env.BROWSER) {
	require('./Header.less');
}
export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar className="navbar-fixed-top">
				<NavBrand>
					<LinkContainer to="/">
						<img src={logo} alt="logo"/>
					</LinkContainer>
				</NavBrand>
				<Nav>
					<LinkContainer to="/home">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/service">
						<NavItem>Service</NavItem>
					</LinkContainer>
					<LinkContainer to="/gallery">
						<NavItem>Gallery</NavItem>
					</LinkContainer>
					<LinkContainer to="/contact">
						<NavItem>Contact</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
						<NavItem>About</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}


Header.prototype.displayName = 'Header';
