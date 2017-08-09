import React from 'react'
import { Route, Link } from 'react-router-dom';

import { Home } from "./Home";
import { Inventory } from "./Inventory";
import { Character } from "./Character";
import { Pet } from "./Pet";
import { Battle } from "./Battle";
import { UnderConstruction } from "./UnderConstruction";

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
			<div id="gamedataheader-container">
				<div className="col-sm-2"></div>
				<div className="col-sm-10">
					<ul className="nav nav-tabs nav-justified nav-collapse">
						<li role="presentation" className={(this.state.activeTab === "home")?"active":"deactivate"}>
							<Link to="/gamedata/home" id="home" onClick={this.activate.bind(this)}>
								<span><img src={"/app/icons/Placeholder.jpg"} /></span>
								{"  "}主城
							</Link>
						</li>
						<li role="presentation" className={(this.state.activeTab === "inventory")?"active":"deactivate"}>
							<Link to="/gamedata/inventory" id="inventory" onClick={this.activate.bind(this)}>
								<span><img src={"/app/icons/Placeholder.jpg"} /></span>
								{"  "}背包
							</Link>
						</li>
						<li role="presentation" className={(this.state.activeTab === "battle")?"active":"deactivate"}>
							<Link to="/gamedata/battle" id="battle" onClick={this.activate.bind(this)}>
								<span><img src={"/app/icons/Placeholder.jpg"} /></span>
								{"  "}战斗
							</Link>
						</li>
						<li role="presentation" className={(this.state.activeTab === "character")?"active":"deactivate"}>
							<Link to="/gamedata/character" id="character" onClick={this.activate.bind(this)}>
								<span><img src={"/app/icons/Placeholder.jpg"} /></span>
								{"  "}人物
							</Link>
						</li>
						<li role="presentation" className={(this.state.activeTab === "pet")?"active":"deactivate"}>
							<Link to="/gamedata/pet" id="pet" onClick={this.activate.bind(this)}>
								<span><img src={"/app/icons/Placeholder.jpg"} /></span>
								{"  "}宠物
							</Link>
						</li>
					</ul>
				</div>

				<Route path="/gamedata/home" component={Home} />
				<Route path="/gamedata/character" component={UnderConstruction} />
				<Route path="/gamedata/battle" component={UnderConstruction} />
				<Route path="/gamedata/inventory" component={Inventory} />
				<Route path="/gamedata/pet" component={UnderConstruction} />
				<Route path="/gamedata/home/test" component={Home} />
			</div>
		);
	}
}
