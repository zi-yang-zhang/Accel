/**
 * Created by robert on 23/09/15.
 */
import React from 'react';
import { Jumbotron }from 'react-bootstrap';

if (process.env.BROWSER) {
	require('./About.less');
}
export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Jumbotron className="about-content">
				<p>For the last 10+ years we've been working hard to bring you the best knowledge, service and prices in automotive repair and services. Our 5,000+ square foot repair facility is equipped with 6 automotive hoists, 3D Hoffman alignment machine, brand new Hoffman tire changer and balancer as well as all the required tools and equipment to diagnose and repair any issues you may have with your vehicle.
					Our shop employs staff ranging from certified class A service technician, certified automotive electrician to Master Mechanics from different automotive giants like Honda, Toyota, Mercedes and BMW. We are using top-of-the line tools, diagnostics equipment and specialized machinery.</p>
			</Jumbotron>
		);
	}
}

About.prototype.displayName = 'About';
