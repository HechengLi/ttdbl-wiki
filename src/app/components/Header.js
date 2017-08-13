import React from "react";
import { Route, Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import Actives from "./Actives";

export class Header extends React.Component {
	constructor (props) {
        super();
        this.state = {
            active: "",
			collapsed: true,
			created: false
        }
    }
	activate(e) {
        this.setState({ active: e.target.id });
		(!this.state.collapsed)?(this.setState({ collapsed: !this.state.collapsed }),
												(document.getElementsByClassName("collapseBtn")[0].classList.remove("change"))):("");
    }
	collapse(e) {
		this.setState({ collapsed: !this.state.collapsed});
		e.target.classList.toggle("change");
	}

	componentDidMount() {
		this.setState({active: Actives.getValueForKey("header")});
		console.log(Actives.getValueForKey("header"));
		if (!this.state.created) {
			window.addEventListener('popstate', function(e){
				this.setState({ active: Actives.getValueForKey("header")});
			}.bind(this));
			window.addEventListener('scroll', function(e){
				var h = document.getElementById("main_header");
		        if (document.body.scrollTop > 200) {
					h.classList.add("small");
				} else {
					h.classList.remove("small");
				}
		    });
			this.setState({created: true});
		}
	}

    render() {
        return(
            <div>
				<div id="main_header" className="header">
					<p style={{whiteSpace:"nowrap"}}><img src={"/app/icons/Placeholder.jpg"} /><span>天天打波利</span></p>
					<div className={this.state.collapsed?("collapsed"):("")}>
						<Link to="/gamedata" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "gamedata")?"active":""}
									id="gamedata" onClick={this.activate.bind(this)}>
								基本资料<br/><span>Info</span>
							</button>
						</Link>
						<Link to="/update" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "update")?"active":""}
									id="update" onClick={this.activate.bind(this)}>
								版本更新<br/><span>Update</span>
							</button>
						</Link>
						<Link to="/contactus" onClick={this.activate.bind(this)}>
							<button className={(this.state.active === "contactus")?"active":""}
									id="contactus" onClick={this.activate.bind(this)}>
								联系我们<br/><span>Contact Us</span>
							</button>
						</Link>
					</div>
					<button className="collapseBtn" onClick={this.collapse.bind(this)}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</button>
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
