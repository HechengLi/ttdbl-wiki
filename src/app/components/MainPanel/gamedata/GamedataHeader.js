import React from 'react'
import { Link } from 'react-router-dom';

import Actives from "../../Actives";

import "../../../stylesheets/style.css"

export class GamedataHeader extends React.Component {
	constructor (props) {
        super();
        this.state = {
            activeTab: "home"
        }
    }
    activate(e) {
        this.setState({ activeTab: e.target.id });
    }

	render() {
		return (
			<div>
				<h1>Gamedata Header - Under Construction</h1>
			</div>
		);
	}
}
