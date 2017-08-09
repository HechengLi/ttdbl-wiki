import React from "react";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import Actives from "./Actives";

import { GamedataHeader } from "./GamedataHeader";
import { UnderConstruction } from "./UnderConstruction";

import "../stylesheets/style.css";

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
		window.onpopstate = (() => (this.setState({ active: Actives.getValueForKey("header")})));
		window.addEventListener('scroll', function(e){
			var h = document.getElementById("main_header");
	        if (document.body.scrollTop > 200) {
				h.classList.add("small");
			} else {
				h.classList.remove("small");
			}
	    });
	}

    render() {
        return(
            <div id="header-container">
				<div id="main_header" className="header">
					<p style={{whiteSpace:"nowrap"}}><img src={"/app/icons/Placeholder.jpg"} />天天打波利</p>
					<span>
						<Link to="/gamedata" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "gamedata")?"active":""}
									id="gamedata">
								基本资料<br/><span>Info</span>
							</button>
						</Link>
						<Link to="/updates" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "updates")?"active":""}
									id="updates">
								版本更新<br/><span>Update</span>
							</button>
						</Link>
						<Link to="/contactus" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "contactus")?"active":""}
									id="contactus">
								联系我们<br/><span>Contact Us</span>
							</button>
						</Link>
					</span>
				</div>
				<div className="background">
				</div>
                <div className="jumbo">
					<p>Constructing</p>
                </div>
            </div>
        );
    }
}
