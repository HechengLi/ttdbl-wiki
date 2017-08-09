import React from "react";
import { Header } from "./Header";
import Actives from "./Actives";

import "../stylesheets/style.css"

export class UnderConstruction extends React.Component {
	componentWillMount() {
		Actives.storeKeyValue("header", this.props.match.params.name);
	}

	componentWillUpdate(nextProps) {
		Actives.storeKeyValue("header", nextProps.match.params.name);
	}

    render() {
        return (
			<div style={{marginBottom:"60px"}}>
				<h1>Under Construction {window.location.pathname}</h1>
			</div>
		);
	}
}
