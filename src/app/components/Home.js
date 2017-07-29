import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/home.css"

export class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}皇家特权
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default" id="special1">
                            <div className="panel-heading">
                                皇家特权
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-offset-2">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>皇家证明</h3>
                                                <hr />
                                                <p>
                                                    每日获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;钻石 x100<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荣誉 x50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商城免费购买zeny x1<br />
                                                    持续特权<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挂机收益 +5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解除所有玩法的次数购买上限<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新增快速探险功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;探险任务经验 +15%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可发送全频道广播<br />
                                                    价格<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥28/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>皇家纹章</h3>
                                                <hr />
                                                <p>
                                                    每日获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;钻石 x100<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荣誉 x50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商城免费购买zeny x1<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;熔炼值 x2000<br />
                                                    每五天获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时装币 x1<br />
                                                    持续特权<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挂机收益 +5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;战斗跟随宠物经验 +50%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随意进入爆满聊天室<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;探险任务上限 +2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解锁所有玩法的次数购买上限<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新增快速探险功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;探险任务经验 +15%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可发送全频道广播<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;螺旋塔免费连续调整<br />
                                                    价格<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥118/90天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default" id="special2">
                            <div className="panel-heading">
                                其他特权
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>宠物大师证明</h3>
                                                <hr />
                                                <p>
                                                    每日获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级探险经验药水 x2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级战斗经验药水 x2<br />
                                                    持续特权<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;探险任务经验 +30%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;战斗跟随宠物经验 +30%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解锁探险‘一键领取’功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宠物进化所需碎片 -12.5%<br />
                                                    价格<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;280礼物币(￥28)/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>佣兵公会证明</h3>
                                                <hr />
                                                <p>
                                                    每日获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荣誉 x300<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;熔炼 x8000<br />
                                                    持续特权<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挂机收益 +10%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每日道场次数 +2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荣誉获得 +5%<br />
                                                    价格<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;280礼物币(￥28)/30天
                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>卢恩商会证明</h3>
                                                <hr />
                                                <p>
                                                    每日获得<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卢恩商会补给 x1<br />
                                                    持续特权<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;背包负重 +50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黑市初始幸运 +400%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刷新黑市消耗 -12.5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黑市必出折扣道具<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可购买卢恩商会专属时装<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;波利狂宴每日购买门票 +3<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;股市默认投资上限 +100000<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;股市每次转生投资上限 +50000<br />
                                                    价格<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;280礼物币(￥28)/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}领时装币
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}精彩活动
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}波利狂宴
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}波利股市
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}每日签到
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}生命研究所
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}商城
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}黑市
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}交易所
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}铁匠
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}好友
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}公会
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}决斗
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}道场
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}战队
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}锦标赛
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}战团
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}螺旋塔
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            </div>
        );
    }
}