import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { GamedataHeader } from "./gamedata/GamedataHeader";
import { Home } from "./gamedata/Home";
import { Inventory } from "./gamedata/Inventory";
import { Character } from "./gamedata/Character";
import { Pet } from "./gamedata/Pet";
import { Battle } from "./gamedata/Battle";

export class Gamedata extends React.Component {

	render() {
		return (
			<div>
				<GamedataHeader />
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
