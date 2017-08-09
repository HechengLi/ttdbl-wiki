import React from "react";
import { render } from "react-dom";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainPanel } from "./components/MainPanel";

import './stylesheets/font-awesome.css';

class App extends React.Component {
    render() {
        return (
			<Router>
	            <div>
	                <Header homeLink="天天打波利" />
					<Switch>
						<Route path="/:name" component={MainPanel} />
					</Switch>
					<Footer />
	            </div>
			</Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
