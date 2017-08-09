import React from "react";
import { Header } from "./Header";

import "../stylesheets/style.css"

export class UnderConstruction extends React.Component {
    render() {
        return (
			<div style={{marginBottom:"60px"}}>
				<h1>Under Construction {window.location.pathname}</h1>
			</div>
		);
	}
}
