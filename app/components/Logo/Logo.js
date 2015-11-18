/**
 * Created by robertzzy on 15/11/15.
 */
import React from 'react';
import logo from '../../../assets/logo.jpg';


if (process.env.BROWSER) {
	require('./Logo.less');
}
export default class Logo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<img src={logo} alt="logo" className="logo"/>
		);
	}
}
Logo.prototype.displayName = 'Logo';
