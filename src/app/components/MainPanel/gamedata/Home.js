import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../../stylesheets/style.css"

export class Home extends React.Component {
    constructor (props) {
        super();
    }

    render() {
        return (
			<div className="data-container">
				<div className="grid">
		            <div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
					<div style={{height:"100%",minHeight:"150px",width:"100%",minWidth:"150px",borderStyle:"solid"}}>TEST</div>
				</div>
			</div>
        );
    }
}
