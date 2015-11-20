/**
 * Created by robert on 23/09/15.
 */
import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import GithubLogo from '../../../assets/Octocat.png'
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
				<div className="signature-container">
					<h4 className="author">Made with love</h4>
					<a href="https://github.com/zi-yang-zhang">
						<img src={GithubLogo}  className="git-logo"/>
					</a>
				</div>
			</footer>
		);
	}

}

Footer.prototype.displayName = 'Footer';
