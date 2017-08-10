import React from 'react'
import { Route, Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { Home } from "./gamedata/Home";
import { Inventory } from "./gamedata/Inventory";
import { Character } from "./gamedata/Character";
import { Pet } from "./gamedata/Pet";
import { Battle } from "./gamedata/Battle";
import Actives from "./Actives";

import "../stylesheets/style.css"

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
				<Switch>
					<Route path="/gamedata/home" component={Home} />
					<Route path="/gamedata/character" component={Character} />
					<Route path="/gamedata/battle" component={Battle} />
					<Route path="/gamedata/inventory" component={Inventory} />
					<Route path="/gamedata/pet" component={Pet} />
				</Switch>
			</div>
		);
	}
}
