import React from "react";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import Actives from "./Actives";

import { GamedataHeader } from "./GamedataHeader";
import { UnderConstruction } from "./UnderConstruction";

import "../stylesheets/style.css"

var initState = "";

export class Header extends React.Component {
	constructor (props) {
        super();
        this.state = {
            active: ""
        }
    }
	activate(e) {
        this.setState({ active: e.target.id });
    }

	componentDidMount() {
		this.setState({ active: Actives.getValueForKey("header")});
	}

	componentDidUpdate() {
	 	console.log(Actives.getValueForKey("header"));
	}

    render() {
		window.onpopstate = () => (this.setState({ active: Actives.getValueForKey("header")}));
        return(
            <Router>
                <div id="header-container">
					<div className="header">
						<p style={{whiteSpace:"nowrap"}}><img src={"/app/icons/Placeholder.jpg"} />天天打波利</p>
						<span>
							<Link to="/gamedata">
								<button className={(this.state.active === "gamedata")?"active":""}
										id="gamedata" onClick={this.activate.bind(this)}>
									基本资料<br/>Info
								</button>
							</Link>
							<Link to="/updates">
								<button className={(this.state.active === "updates")?"active":""}
										id="updates" onClick={this.activate.bind(this)}>
									版本更新<br/>Update
								</button>
							</Link>
							<Link to="/contactus">
								<button className={(this.state.active === "contactus")?"active":""}
										id="contactus" onClick={this.activate.bind(this)}>
									联系我们<br/>Contact Us
								</button>
							</Link>
						</span>
					</div>
                    <div className="jumbo">
						<p>Constructing</p>
                    </div>
					<Switch>
						<Redirect exact from="/gamedata" to="/gamedata/home" />
						<Route exact path="/" component={UnderConstruction} />
						<Route exact path="/:name" component={UnderConstruction} />
						<Route path="/gamedata" component={GamedataHeader} />
						<Route path="/updates" component={UnderConstruction} />
						<Route path="/contactus" component={UnderConstruction} />
					</Switch>
                </div>
            </Router>
        );
    }
}
