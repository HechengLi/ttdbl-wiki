import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import './stylesheets/font-awesome.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header homeLink="天天打波利" />
				<Footer />
            </div>
        );
    }
}
//test git
render(<App/>, window.document.getElementById("app"));
