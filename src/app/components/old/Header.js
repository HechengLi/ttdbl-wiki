import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { GamedataHeader } from ".././GamedataHeader";
import { UnderConstruction } from ".././UnderConstruction";

import "../../stylesheets/style.css"

export class Header extends React.Component {
    render() {
        return(
            <Router>
                <div id="header-container">
					<Navbar collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
								<a>天天打波利</a>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav>
  								<LinkContainer to="/gamedata">
									<NavItem eventKey={1}>游戏资料</NavItem>
								</LinkContainer>
  								<LinkContainer to="/updates">
									<NavItem eventKey={2}>版本更新</NavItem>
								</LinkContainer>
  								<LinkContainer to="/contactus">
									<NavItem eventKey={3}>联系我们</NavItem>
								</LinkContainer>
							</Nav>
							<Nav pullRight>
								<NavItem eventKey={1}>Link Right 1</NavItem>
								<NavItem eventKey={2}>Link Right 2</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
                    <div className="jumbotron">
                        <h1>天天打波利！- Under Construction</h1>
                        <p>--------</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Btn</a></p>
                    </div>
					<Switch>
						<Redirect from="/gamedata" exact to="/gamedata/home" />
						<Route path="/" exact component={UnderConstruction} />
						<Route path="/gamedata" component={GamedataHeader} />
						<Route path="/updates" component={UnderConstruction} />
						<Route path="/contactus" component={UnderConstruction} />
					</Switch>
                </div>
            </Router>
        );
    }
}
