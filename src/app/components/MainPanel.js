import React from "react";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { GamedataHeader } from "./GamedataHeader";
import { UnderConstruction } from "./UnderConstruction";

import Actives from "./Actives";

export class MainPanel extends React.Component {

	componentWillMount() {
		Actives.storeKeyValue("header", this.props.match.params.name);
	}

	componentWillUpdate(nextProps) {
		Actives.storeKeyValue("header", nextProps.match.params.name);
	}

    render() {
        return (
			<div>
				<Switch>
					<Redirect exact path="/gamedata" to="/gamedata/home" />
					<Route path="/gamedata" component={GamedataHeader} />
					<Route path="/updates" component={UnderConstruction} />
					<Route path="/contactus" component={UnderConstruction} />
				</Switch>
			</div>
		);
	}
}
