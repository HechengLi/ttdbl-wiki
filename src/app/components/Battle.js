import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/battle.css"

export class Battle extends React.Component {
    render() {
        return (
            <div id="battle-container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}聊天频道
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}挂机设置
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}快速战斗
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        );
    }
}