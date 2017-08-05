import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { GamedataHeader } from "./GamedataHeader";

import "../stylesheets/header.css"

export class Header extends React.Component {
    render() {
        return(
            <Router>
                <div id="header-container">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand">
                                    <span><img src={"/app/icons/Placeholder.jpg"} /></span>
                                    {"  "}{this.props.homeLink}
                                </a>
                            </div>
                            <ul className="nav navbar-nav" id="header-nav">
                                <li className="active">
                                    <Link to="/gamedata/" id="gamedata">
                                        <span><img src={"/app/icons/Placeholder.jpg"} /></span>
                                        {"  "}游戏资料
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contactus" id="contact">
                                        <span><img src={"/app/icons/Placeholder.jpg"} /></span>
                                        {"  "}联系我们
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="jumbotron">
                        <h1>天天打波利！</h1>
                        <p>以后再写</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">按钮</a></p>
                    </div>
					<Switch>
					<Redirect from="/gamedata" exact to="/gamedata/home" />
					<Route path="/gamedata" component={GamedataHeader} />
					</Switch>
                </div>
            </Router>
        );
    }
}
