import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/character.css"

export class Character extends React.Component {
    render() {
        return (
            <div id="character-container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}属性
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}转职/转生
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}技能
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}普通技能
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
            
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}职业技能
                            </div>
                            <div className="panel-body">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}符文骑士
                                    </div>
                                    <div className="panel-body">
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}大法师
                                    </div>
                                    <div className="panel-body">
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}游侠
                                    </div>
                                    <div className="panel-body">
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                        {"  "}十字切割者
                                    </div>
                                    <div className="panel-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}神器
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        );
    }
}