import React from 'react'
import { Link } from 'react-router-dom';

import Actives from "../../Actives";

export class GamedataHeader extends React.Component {
	constructor (props) {
        super();
        this.state = {
            active: "home",
			test: false
        }
    }
    activate(e) {
        this.setState({ active: e.target.id });
    }

	componentWillMount() {
		Actives.storeKeyValue("gdh2", true);
		this.setState({active: Actives.getValueForKey("subheader")});
		if (!Actives.getValueForKey("gdh1")) {
			window.addEventListener('popstate', function(e) {
				if (Actives.getValueForKey("gdh2")) {
					this.setState({active: Actives.getValueForKey("subheader")});
				}
			}.bind(this));
			Actives.storeKeyValue("gdh1", true);
		}
	}

	componentWillUnmount() {
		Actives.storeKeyValue("gdh2", false);
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
