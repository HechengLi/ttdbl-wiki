import React from 'react'
import { Link } from 'react-router-dom';

import Actives from "../../Actives";

import "../../../stylesheets/style.css"

export class GamedataHeader extends React.Component {
	constructor (props) {
        super();
        this.state = {
            active: "home"
        }
    }
    activate(e) {
        this.setState({ active: e.target.id });
    }

	componentDidMount() {
		window.onpopstate = (() => (this.setState({ active: Actives.getValueForKey("subheader") })));
	}

	render() {
		return (
			<div style={{marginBottom:"-10px"}}>
				<ul className="subheader">
					<li>
						<Link to="/gamedata/home" style={{textDecoration:"none"}} onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "home")?"active":""}
									id="home" onClick={this.activate.bind(this)}>主城</button>
						</Link>
					</li>
					<li>
						<Link to="/gamedata/inventory" style={{textDecoration:"none"}} onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "inventory")?"active":""}
									id="inventory" onClick={this.activate.bind(this)}>背包</button>
						</Link>
					</li>
					<li>
						<Link to="/gamedata/battle" style={{textDecoration:"none"}} onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "battle")?"active":""}
									id="battle" onClick={this.activate.bind(this)}>战斗</button>
						</Link>
					</li>
					<li>
						<Link to="/gamedata/character" style={{textDecoration:"none"}} onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "character")?"active":""}
									id="character" onClick={this.activate.bind(this)}>人物</button>
						</Link>
					</li>
					<li>
						<Link to="/gamedata/pet" style={{textDecoration:"none"}} onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "pet")?"active":""}
									id="pet" onClick={this.activate.bind(this)}>宠物</button>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
