import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/pet.css"

export class Pet extends React.Component {
    render() {
        return (
            <div>
                <div id="pet-container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <span><img src={"app/icons/Placeholder.jpg"} /></span>
                            {"  "}技能手册
                        </div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}主动技能
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}辅助技能
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <span><img src={"app/icons/Placeholder.jpg"} /></span>
                            {"  "}宠物探险
                        </div>
                        <div className="panel-body">
                        </div>
                    </div>

                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <span><img src={"app/icons/Placeholder.jpg"} /></span>
                            {"  "}宠物图签
                        </div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}橙色宠物
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}紫色宠物
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}蓝色宠物
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}绿色宠物
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                    {"  "}白色宠物
                                </div>
                                <div className="panel-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}