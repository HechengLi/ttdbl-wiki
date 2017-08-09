import React from "react";

import "../stylesheets/style.css"

export class UnderConstruction extends React.Component {
	componentDidMount() {
		console.log(this.params);
	}
    render() {
        return (
			<div>
				<h1>Under Construction</h1>
			</div>
		);
	}
}
