/**
 * Created by robert on 30/09/15.
 */

import React from 'react';


export default class Service extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>service, maintenance, repair, window tint, car wrap, performance parts, 3d wheel alignment, safety inspection, computer check up, paint protection, modification, auto body.</h1>
			</div>);
	}
}

Service.prototype.displayName = 'Service';
