import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

import "../stylesheets/footer.css"

export class Footer extends React.Component {
    render() {
        return(
			<div className="footer-container">
				<footer className="footer">
					<div className="container">
						<p className="text-muted">Footer - Under Construction</p>
					</div>
				</footer>
			</div>
		);
	}
}
