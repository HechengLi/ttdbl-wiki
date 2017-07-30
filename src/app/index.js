import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";

import './stylesheets/font-awesome.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header homeLink="天天打波利" />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));