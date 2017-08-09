import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import "../stylesheets/style.css"

export class Footer extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', function(e){
			var h = document.getElementById("main_footer");
			if ((window.innerHeight + window.scrollY + 30) >= document.body.offsetHeight) {
				h.classList.remove("small");
		    } else {
				h.classList.add("small");
			}
	    });
	}

    render() {
        return(
			<div className="footer-container">
				<div id="main_footer" className="footer small">
					<p className="text-muted">Footer - Under Construction</p>
				</div>
			</div>
		);
	}
}
