import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import { Home } from "./Home";
import { Inventory } from "./Inventory";
import { Character } from "./Character";
import { Pet } from "./Pet";
import { Battle } from "./Battle";

import "../stylesheets/header.css"

export class Header extends React.Component {
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
        return(
            <Router>
                <div id="header-container">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}{this.props.homeLink}
                                </a>
                            </div>
                            <ul className="nav navbar-nav" id="header-nav">
                                <li className="active">
                                    <Link to="/" id="gameinfo">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}游戏资料
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" id="contact">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
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

                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-10">
                            <ul className="nav nav-tabs nav-justified">
                                <li role="presentation" className={(this.state.activeTab === "home")?"active":""}>
                                    <Link to="/home" id="home" onClick={this.activate.bind(this)}>
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}主城
                                    </Link>
                                </li>
                                <li role="presentation" className={(this.state.activeTab === "inventory")?"active":""}>
                                    <Link to="/inventory" id="inventory" onClick={this.activate.bind(this)}>
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}背包
                                    </Link>
                                </li>
                                <li role="presentation" className={(this.state.activeTab === "battle")?"active":""}>
                                    <Link to="/battle" id="battle" onClick={this.activate.bind(this)}>
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}战斗
                                    </Link>
                                </li>
                                <li role="presentation" className={(this.state.activeTab === "character")?"active":""}>
                                    <Link to="/character" id="character" onClick={this.activate.bind(this)}>
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}人物
                                    </Link>
                                </li>
                                <li role="presentation" className={(this.state.activeTab === "pet")?"active":""}>
                                    <Link to="/pet" id="pet" onClick={this.activate.bind(this)}>
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}宠物
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/inventory" component={Inventory} />
                        <Route path="/character" component={Character} />
                        <Route path="/pet" component={Pet} />
                        <Route path="/battle" component={Battle} />

                        <Redirect from="/" exact to="/home" />
                    </Switch>
                </div>
            </Router>
        );
    }
}
