import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/inventory.css"

export class Inventory extends React.Component {
    render() {
        return (
            <div id="inventory-container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}装备
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                装备
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                时装
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                神格
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}宝石
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default" id="special2">
                            <div className="panel-heading">
                                普通
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                        <div className="panel panel-default" id="special2">
                            <div className="panel-heading">
                                传奇
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}典藏
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}道具
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        );
    }
}