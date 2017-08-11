import React from "react";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { Welcome } from "./MainPanel/Welcome";
import { Gamedata } from "./MainPanel/Gamedata";
import { Update } from "./MainPanel/Update";
import { ContactUs } from "./MainPanel/ContactUs";

import Actives from "./Actives";

export class MainPanel extends React.Component {

	componentWillMount() {
		Actives.storeKeyValue("header", this.props.match.params.name);
		Actives.storeKeyValue("subheader", this.props.match.params.subname);
	}

	componentWillUpdate(nextProps) {
		Actives.storeKeyValue("header", nextProps.match.params.name);
		Actives.storeKeyValue("subheader", nextProps.match.params.subname);
	}

	componentWillUnmount() {
		Actives.storeKeyValue("header", "");
		Actives.storeKeyValue("subheader", "");
	}

    render() {
        return (
			<div>
				<Switch>
					<Redirect exact path="/gamedata" to="/gamedata/home" />
					<Route path="/" exact component={Welcome} />
					<Route path="/gamedata" component={Gamedata} />
					<Route path="/update" component={Update} />
					<Route path="/contactus" component={ContactUs} />
				</Switch>
			</div>
		);
	}
}
