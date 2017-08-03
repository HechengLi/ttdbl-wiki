import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Panel, Button} from "react-bootstrap";

import "../stylesheets/home.css"
//import "../stylesheets/font-awesome.min.css"

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            vip: true,
            coin: true,
            event: true,
            bingo: true,
            stock: true,
            checkin: true,
            life: true,
            store: true,
            blackmarket: true,
            trade: true,
            blacksmith: true,
            friend: true,
            guild: true,
            pvp: true,
            daochang: true,
            team: true,
            arena: true,
            zhantuan: true,
            tower: true
        }
    }
    
    onCollapse(e) {
        this.setState({ collapse: !this.state.collapse })
    }
    
    render() {
        const hideornot = ((this.state.stock)?"inline":"none");

        const hidePic = {
            display: hideornot
        };
        return (
            <div id="home-container">
                <div className="row">
                    <div className="col-sm-2">
                        <div id="menu" style={{border:"2px solid grey", borderRadius:"8px", marginLeft:"10px"}}>
                            <p>
                                &nbsp;&nbsp;<a>特权</a><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>皇家特权</a><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>其他特权</a><br />
                                &nbsp;&nbsp;<a>领时装币</a><br />
                                &nbsp;&nbsp;<a>精彩活动</a><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>首次充值</a><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>绑定奖励</a><br />
                                &nbsp;&nbsp;<a>波利狂宴</a><br />
                                &nbsp;&nbsp;<a>波利股市</a><br />
                                &nbsp;&nbsp;<a>每日签到</a><br />
                                &nbsp;&nbsp;<a>生命研究所</a><br />
                                &nbsp;&nbsp;<a>商城</a><br />
                                &nbsp;&nbsp;<a>黑市</a><br />
                                &nbsp;&nbsp;<a>交易所</a><br />
                                &nbsp;&nbsp;<a>铁匠</a><br />
                                &nbsp;&nbsp;<a>好友</a><br />
                                &nbsp;&nbsp;<a>公会</a><br />
                                &nbsp;&nbsp;<a>决斗</a><br />
                                &nbsp;&nbsp;<a>道场</a><br />
                                &nbsp;&nbsp;<a>战队</a><br />
                                &nbsp;&nbsp;<a>锦标赛</a><br />
                                &nbsp;&nbsp;<a>战团</a><br />
                                &nbsp;&nbsp;<a>螺旋塔</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <Panel header={<div onClick={()=>this.setState({vip: !this.state.vip})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}特权
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({vip: !this.state.vip})}></i></div>}
                                bsStyle="default"
                                collapsible
                                expanded={this.state.vip}>
                            <div className="panel panel-default" id="special1">
                                <div className="panel-heading">
                                    皇家特权
                                </div>

                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-4 col-md-offset-2 col-sm-6">
                                            <div className="thumbnail">
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                <div className="caption">
                                                    <h3>皇家证明</h3>
                                                    <hr />
                                                    <p>
                                                        <span className="label label-default">每日获得</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石 x100<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x50<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买zeny x1<br />
                                                        <span className="label label-default">持续特权</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解除所有玩法的次数购买上限<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播<br />
                                                        <span className="label label-default">价格</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;￥28/30天
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="thumbnail">
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                <div className="caption">
                                                    <h3>皇家纹章</h3>
                                                    <hr />
                                                    <p>
                                                        <span className="label label-default">每日获得</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石 x100<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x50<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买zeny x1<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;熔炼值 x2000<br />
                                                        <span className="label label-default">每五天获得</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;时装币 x1<br />
                                                        <span className="label label-default">持续特权</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;战斗跟随宠物经验 +50%<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;随意进入爆满聊天室<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务上限 +2<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解锁所有玩法的次数购买上限<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;螺旋塔免费连续调整<br />
                                                        <span className="label label-default">价格</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;￥118/90天
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
                                        <div className="col-md-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="thumbnail">
                                                        <img src={"app/icons/Placeholder.jpg"} />
                                                        <div className="caption">
                                                            <h3>宠物大师证明</h3>
                                                            <hr />
                                                            <p>
                                                                <span className="label label-default">每日获得</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;高级探险经验药水 x2<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;高级战斗经验药水 x2<br />
                                                                <span className="label label-default">持续特权</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +30%<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;战斗跟随宠物经验 +30%<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解锁探险‘一键领取’功能<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;宠物进化所需碎片 -12.5%<br />
                                                                <span className="label label-default">价格</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="thumbnail">
                                                        <img src={"app/icons/Placeholder.jpg"} />
                                                        <div className="caption">
                                                            <h3>佣兵公会证明</h3>
                                                            <hr />
                                                            <p>
                                                                <span className="label label-default">每日获得</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x300<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;熔炼 x8000<br />
                                                                <span className="label label-default">持续特权</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +10%<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;每日道场次数 +2<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉获得 +5%<br />
                                                                <span className="label label-default">价格</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-6">
                                                    <div className="thumbnail">
                                                        <img src={"app/icons/Placeholder.jpg"} />
                                                        <div className="caption">
                                                            <h3>卢恩商会证明</h3>
                                                            <hr />
                                                            <p>
                                                                <span className="label label-default">每日获得</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;卢恩商会补给 x1<br />
                                                                <span className="label label-default">持续特权</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;背包负重 +50<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;黑市初始幸运 +400%<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;刷新黑市消耗 -12.5%<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;黑市必出折扣道具<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可购买卢恩商会专属时装<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;波利狂宴每日购买门票 +3<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;股市默认投资上限 +100000<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;股市转生投资上限 +50000<br />
                                                                <span className="label label-default">价格</span><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Panel header={<div onClick={()=>this.setState({coin: !this.state.coin})}>
                                                    <img src={"app/icons/Placeholder.jpg"} />
                                                    {"  "}领时装币
                                                    <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({coin: !this.state.coin})}></i></div>} 
                                            bsStyle="default"
                                            collapsible
                                            expanded={this.state.coin}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <p>
                                                    分享二维码/链接获得奖励<br />
                                                    获得积分方法：<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;点击链接或扫二维码<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;创建角色<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;通过苏克拉特100<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;角色一转职<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;角色二转职<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;角色一转生
                                                </p>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">奖励列表</div>
                                                    <table className="table table-striped table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积分</th>
                                                                <th>奖励</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20</td>
                                                                <td>时装币 x1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</td>
                                                                <td>荣誉 x100</td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???</td>
                                                                <td>??? x?</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                </div>
                                <div className="col-sm-6">
                                    <Panel header={<div onClick={()=>this.setState({event: !this.state.event})}>
                                                    <img src={"app/icons/Placeholder.jpg"} />
                                                    {"  "}精彩活动
                                                    <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({event: !this.state.event})}></i></div>} 
                                            bsStyle="default"
                                            collapsible
                                            expanded={this.state.event}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        {"  "}首次充值
                                                    </div>
                                                    <div className="panel-body">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;时装 波利帽 x1<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;Zeny x10000<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;属性洗点书 x1<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;技能重置棒 x1
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        {"  "}绑定奖励
                                                    </div>
                                                    <div className="panel-body">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;钻石 x200<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;时装币 x1<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;zeny x10000<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;榴莲 x10
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-sm-7">
                                <Panel header={<div onClick={()=>this.setState({bingo: !this.state.bingo})}>
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                {"  "}波利狂宴
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({bingo: !this.state.bingo})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.bingo}>
                                <span className="label label-default">玩法</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从6x9=54个怪物中选择几个<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开奖时如果选对了会获得钻石奖励<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选择需要消耗狂宴门票<br />
                                <span className="label label-default">门票获取方法</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每日17:00赠送1张 (邮箱领取)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100礼物币购买，每日1次 (卢恩商会证明3次)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门票每周自动清空
                                <div className="panel panel-default">
                                    <div className="panel-heading">奖励列表</div>
                                    <table className="table table-striped table-condensed">
                                        <thead>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;奖励</td>
                                                <td>条件</td>
                                                <td>奖品</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;头等奖</td>
                                                <td>选对3只</td>
                                                <td>钻石 x5000</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二等奖</td>
                                                <td>选对2只</td>
                                                <td>钻石 x200</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三等奖</td>
                                                <td>选对1只</td>
                                                <td>钻石 x50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                每个奖励的怪物是分开的，头等奖3选3，二等奖2选2，三等奖4选1
                            </Panel>
                            </div>
                            <div className="col-sm-5">
                                <Panel header={<div onClick={()=>this.setState({stock: !this.state.stock})}>
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                {"  "}波利股市
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({stock: !this.state.stock})}></i></div>} 
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.stock}>
                                    <span className="label label-default">玩法</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每周一至周五10:00-22:00可以进行交易<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格10分钟刷新一次<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;涨跌基本随机<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;周五22:00自动出售所有股票<br />
                                    <span className="label label-default">上限</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基础上限100000Zeny<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每次转生增加100000Zeny<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每天增加50000Zeny (周一重置)
                                </Panel>
                                <div key={hideornot} className="thumbnail" style={hidePic}>
                                    <img src={"app/icons/Placeholder.jpg"} style={{height:"156px"}} />
                                </div>
                            </div>
                        </div>

                        <Panel header={<div onClick={()=>this.setState({checkin: !this.state.checkin})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}每日签到
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({checkin: !this.state.checkin})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.checkin}>
                            <div className="panel panel-default">
                                <div className="panel-heading">签到奖励</div>
                                <table id="checkin" className="table table-striped table-condensed">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Boss扫荡卷 x1</td>
                                            <td>钻石 x20</td>
                                            <td>紫色宠物碎片 x5</td>
                                            <td>西瓜 x1</td>
                                            <td>1级耐力宝石 x1</td>
                                            <td>Boss扫荡卷 x2</td>
                                        </tr>
                                        <tr>
                                            <td>钻石 x25</td>
                                            <td>紫色宠物碎片 x10</td>
                                            <td>西瓜 x2</td>
                                            <td>1级幸运宝石 x1</td>
                                            <td>Boss扫荡卷 x3</td>
                                            <td>钻石 x30</td>
                                        </tr>
                                        <tr>
                                            <td>紫色宠物碎片 x15</td>
                                            <td>西瓜 x3</td>
                                            <td>1级敏捷宝石 x1</td>
                                            <td>Boss扫荡卷 x4</td>
                                            <td>钻石 x35</td>
                                            <td>紫色宠物碎片 x15</td>
                                        </tr>
                                        <tr>
                                            <td>西瓜 x4</td>
                                            <td>1级力量宝石 x1</td>
                                            <td>Boss扫荡卷 x5</td>
                                            <td>钻石 x40</td>
                                            <td>紫色宠物碎片 x15</td>
                                            <td>西瓜 x6</td>
                                        </tr>
                                        <tr>
                                            <td>1级智力宝石 x1</td>
                                            <td>Boss扫荡卷 x6</td>
                                            <td>钻石 x50</td>
                                            <td>紫色宠物碎片 x20</td>
                                            <td>西瓜 x8</td>
                                            <td>1级灵巧宝石 x1</td>
                                        </tr>
                                        <tr>
                                            <td>Boss扫荡卷 x6</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table id="checkin2" className="table table-striped table-condensed">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Boss扫荡卷 x1</td>
                                            <td>钻石 x20</td>
                                            <td>紫色宠物碎片 x5</td>
                                            <td>西瓜 x1</td>
                                        </tr>
                                        <tr>
                                            <td>1级耐力宝石 x1</td>
                                            <td>Boss扫荡卷 x2</td>
                                            <td>钻石 x25</td>
                                            <td>紫色宠物碎片 x10</td>
                                        </tr>
                                        <tr>
                                            <td>西瓜 x2</td>
                                            <td>1级幸运宝石 x1</td>
                                            <td>Boss扫荡卷 x3</td>
                                            <td>钻石 x30</td>
                                        </tr>
                                        <tr>
                                            <td>紫色宠物碎片 x15</td>
                                            <td>西瓜 x3</td>
                                            <td>1级敏捷宝石 x1</td>
                                            <td>Boss扫荡卷 x4</td>
                                        </tr>
                                        <tr>
                                            <td>钻石 x35</td>
                                            <td>紫色宠物碎片 x15</td>
                                            <td>西瓜 x4</td>
                                            <td>1级力量宝石 x1</td>
                                        </tr>
                                        <tr>
                                            <td>Boss扫荡卷 x5</td>
                                            <td>钻石 x40</td>
                                            <td>紫色宠物碎片 x15</td>
                                            <td>西瓜 x6</td>
                                        </tr>
                                        <tr>
                                            <td>1级智力宝石 x1</td>
                                            <td>Boss扫荡卷 x6</td>
                                            <td>钻石 x50</td>
                                            <td>紫色宠物碎片 x20</td>
                                        </tr>
                                        <tr>
                                            <td>西瓜 x8</td>
                                            <td>1级灵巧宝石 x1</td>
                                            <td>Boss扫荡卷 x6</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="panel-footer">
                                    每天签到获得奖励 注意并不是累计签到，而是几号签到领几号的奖励<br />
                                    每签到30天获得时装盒 x1
                                </div>
                            </div>              
                            <div className="panel panel-default">
                                <div className="panel-heading">大事记记录</div>
                                <table className="table table-striped table-condensed">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>转生</td>
                                            <td>第一次到达830关</td>
                                            <td>第一次关注别人</td>
                                            <td>第一次蜕变宠物</td>
                                        </tr>
                                        <tr>
                                            <td>第一次决斗胜利</td>
                                            <td>第一次合成宠物</td>
                                            <td>第一天进入游戏</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Panel>   
                        <div className="row">
                            <div className="col-md-5">
                                <Panel header={<div onClick={()=>this.setState({life: !this.state.life})}>
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                {"  "}生命研究所
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({life: !this.state.life})}></i></div>} 
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.life}>
                                    <span className="label label-default">玩法</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每周三16个npc进行决斗<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以用竞猜币压哪个npc获胜<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猜对翻倍 (最高压1000)
                                    <div className="panel panel-default">
                                        <div className="panel-heading">竞猜币兑换表</div>
                                        <table className="table table-striped table-condensed">
                                            <thead>
                                                <tr>
                                                    <th>物品</th>
                                                    <th>价格</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;&nbsp;初级探险经验药水 x1</td>
                                                    <td>竞猜币 x100</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;初级战斗经验药水x1</td>
                                                    <td>竞猜币x200</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;高级探险经验药水x1</td>
                                                    <td>竞猜币x500</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;高级战斗经验药水x1</td>
                                                    <td>竞猜币x2000</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;3级力量宝石x1</td>
                                                    <td>竞猜币x1800</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;3级灵巧宝石x1</td>
                                                    <td>竞猜币x1800</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;3级智力宝石x1</td>
                                                    <td>竞猜币x1800</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;4级力量宝石x1</td>
                                                    <td>竞猜币x5000</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;4级灵巧宝石x1</td>
                                                    <td>竞猜币x5000</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;&nbsp;4级智力宝石x1</td>
                                                    <td>竞猜币x5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Panel>
                            </div>
                                                    
                            <div className="col-md-7">
                                <Panel header={<div onClick={()=>this.setState({store: !this.state.store})}>
                                                <img src={"app/icons/Placeholder.jpg"} />
                                                {"  "}商城
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({store: !this.state.store})}></i></div>} 
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.store}>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">充值</div>
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading">钻石</div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                钻石 x7480
                                                                <span className="label label-default" style={{float:"right"}}>￥648</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                钻石 x3768
                                                                <span className="label label-default" style={{float:"right"}}>￥328</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                钻石 x1460
                                                                <span className="label label-default" style={{float:"right"}}>￥128</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                钻石 x768
                                                                <span className="label label-default" style={{float:"right"}}>￥68</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                钻石 x336
                                                                <span className="label label-default" style={{float:"right"}}>￥30</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                钻石 x6
                                                                <span className="label label-default" style={{float:"right"}}>￥6</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading">礼物币</div>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                礼物币 x500
                                                                <span className="label label-default" style={{float:"right"}}>￥50</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                礼物币 x1100
                                                                <span className="label label-default" style={{float:"right"}}>￥108</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                礼物币 x2800
                                                                <span className="label label-default" style={{float:"right"}}>￥128</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                礼物币 x5500
                                                                <span className="label label-default" style={{float:"right"}}>￥518</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">每日抽</div>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                ???
                                                <span className="badge">??%</span>
                                            </li>
                                        </ul>
                                        <div className="panel-footer">每天免费30次</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">抽宠物 - 每抽10次必得宠物 x1</div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        探险经验药水
                                                        <span className="badge">13.39%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        战斗经验药水
                                                        <span className="badge">13.39%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        绿色宠物碎片
                                                        <span className="badge">16.07%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        蓝色宠物碎片
                                                        <span className="badge">31.25%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        紫色宠物碎片
                                                        <span className="badge">20.98%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        绿色宠物
                                                        <span className="badge">1%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        蓝色宠物
                                                        <span className="badge">1.95%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        紫色宠物
                                                        <span className="badge">1.62%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        宝图碎片
                                                        <span className="badge">0.35%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        白色宠物/碎片
                                                        <span className="badge">??%</span>
                                                    </li>
                                                </ul>
                                                <div className="panel-footer">
                                                    每天免费一次<br />
                                                    抽一次: 钻石 x100<br />
                                                    连抽10次: 钻石 x880
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">抽宝图 - 每抽10次必得宝图碎片 x1</div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        水果
                                                        <span className="badge">20%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        糖果
                                                        <span className="badge">20%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        探险经验药水
                                                        <span className="badge">28%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        战斗经验药水
                                                        <span className="badge">28%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        宝图碎片(符文)
                                                        <span className="badge">2%</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        宝图碎片(宠物技能)
                                                        <span className="badge">2%</span>
                                                    </li>
                                                </ul>
                                                <div className="panel-footer">
                                                    每天免费一次<br />
                                                    抽一次: 钻石 x100<br />
                                                    连抽10次: 钻石 x880
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">兑换Zeny</div>
                                                <div className="panel-body">
                                                    兑换120分钟的zeny收益
                                                </div>
                                                <div className="panel-footer">礼物币 x20/?/?</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">时装</div>
                                        <div className="panel-body">
                                            商城出售:<br />
                                            除武器，发型之外随机时装x6<br />
                                            随机音乐x1<br />
                                            本职业随机武器x4<br />
                                            随机发型x4
                                        </div>
                                        <div className="panel-footer">
                                            每星期刷新一次<br />
                                            刷新价格: 钻石 x50
                                        </div>
                                    </div>
                                </Panel>
                            </div>
                        </div>    
                        
                        
                        <Panel header={<div onClick={()=>this.setState({blackmarket: !this.state.blackmarket})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}黑市
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({blackmarket: !this.state.blackmarket})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.blackmarket}>
                            展示6个随机道具，价格可能是钻石或zeny
                            随机出现2/4/6/8折扣
                            可能出现 白色宠物碎片，绿色宠物碎片，蓝色宠物碎片，紫色宠物碎片，橙色宠物碎片(只会出现已有宠物的碎片)，神之金属，装备，1/2/3级宝石，Boss扫荡卷，星魂经验
                            手动刷新价格10/?/?
                            刷新时间?
                        </Panel>

                        <Panel header={<div onClick={()=>this.setState({trade: !this.state.trade})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}交易所
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({trade: !this.state.trade})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.trade}>
                            可以用Zeny购买其他玩家道具，或者把道具出售给其他玩家
                            购买谁的物品纯属随机
                            上架费用（不知道怎么算的）最高Zenyx10000
                            税率
                            单价1-9999 2%
                               10000-99999 4%
                               100000-999999 6%
                               1000000-9999999 8%
                            最多上架道具x10
                        </Panel>

                        <Panel header={<div onClick={()=>this.setState({blacksmith: !this.state.blacksmith})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}铁匠
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({blacksmith: !this.state.blacksmith})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.blacksmith}>
                            普通熔炼装备(最多同时6个)熔炼时有概率获得更高品质装备，橙装有概率获得神之水晶
                            熔炼值获得
                            白装 熔炼值x？
                            蓝装 熔炼值x？
                            紫装 熔炼值x100
                            橙装 熔炼值x？
                            神衣熔炼 可以选择传奇宝石x1-3，熔炼值x500，重铸碎片x10
                            熔炼价格 传奇宝石x1 免费
                                    传奇宝石x2 钻石x200
                                    传奇宝石x3 钻石x500
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({friend: !this.state.friend})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}好友
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({friend: !this.state.friend})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.friend}>
                            摸头 每日五次 获得荣誉x50
                            送礼 每日只能送一次玫瑰 冰雕玫瑰 钻石x50 获得荣誉x300 羁绊x50
                                                永恒玫瑰 钻石x500 获得荣誉x500 羁绊x300
                                                棒棒糖 礼物币x10 对方获得钻石x10 小奖励
                                                二克拉钻石 礼物币x250 对方获得钻石x125 丰厚奖励
                                                神秘紫箱 礼物币x888 对方获得超丰厚奖励(时装币，钻石)
                                                世界之星钻石 礼物币x6180 对方获得钻石x3090 极丰厚奖励
                            送特权 皇家证明 礼物币x280
                                皇家纹章 礼物币x1180
                                宠物大师证明 礼物币x280
                                佣兵公会证明 礼物币x280
                                卢恩商会证明 礼物币x280
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({guild: !this.state.guild})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}公会
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({guild: !this.state.guild})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.guild}>
                            公会人数上限100
                            职位：会长 - 
                                副会长 - 
                                精英 - 
                                会员 -
                            公会问答 大概每3星期一次
                            总共10题
                            答对1题 钻石x20
                            答对2题 芒果x5
                            答对4题 钻石x30
                            答对6题 高级探险经验药水x5
                            答对8题 钻石x50
                            答对10题 时装币x1
                            答题类型：？
                            公会红包：
                                25份 价格 礼物币x2000 获得 荣誉x600
                                50份 价格 礼物币x5000 获得 荣誉x1800
                                红包奖品：钻石x25，2级宝石x1，钻石x18，绿糖果x1，钻石x99，草莓x3，哈密瓜x1，西瓜x2，钻石x66，Boss扫荡卷x5，钻石x50，？
                            公会战：
                                公会战流程：周日20:00至周三之间 累计荣誉超过30000并且会长/副会长登录过 获得报名资格
                                            周四有公会成员登录自动报名
                                            周五0:00至20:00分配对手
                                            周五20:00至周六20:00准备
                                            周六20:00至周日20:00战斗
                                报名结束后加入的会员不可参战
                                拥有参战资格的会员不论参与与否均可获得奖励
                                战斗结束后点击“结算查看”领取奖励
                                公会战失败下次胜利会增加20%奖励，最高累计100%(与公会无关，换公会依然存在)
                                公会战奖励：
                                    荣誉x6000(胜利)
                                    荣誉x4000(失败)
                                    钻石x?
                                    水果x?
                                    初级探险药水x?
                                    ?
                        </Panel>

                        <Panel header={<div onClick={()=>this.setState({pvp: !this.state.pvp})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}决斗
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({pvp: !this.state.pvp})}></i></div>}
                                bsStyle="default"
                                collapsible
                                expanded={this.state.pvp}>
                            每周分配30名同转生 战力接近的玩家组成小组(一周未登录不匹配)
                            进行战斗消耗入场券x1
                            一张入场券失败1次或3连胜失效
                            入场券每12小时获得一张，最多2张(已有2张不计时)
                            入场券价格：50/100/100/200/200/300/300/400/400/500(最高)
                            周日21:00结算，24:00发送奖励
                            战胜对手获得积分，比对手战力越高获得越少，比对手战力越低获得越多，最少30，最高？
                            奖励：
                                    第一名 荣誉x6000 钻石x150 神秘宠物水晶/神秘符文原石x10
                                    第二名 荣誉x5000 钻石x130 神秘宠物水晶/神秘符文原石x5
                                    第三名 荣誉x4500 钻石x125 神秘宠物水晶/神秘符文原石x3
                                    第四名-第十名 荣誉x3600 钻石x50 神秘宠物水晶/神秘符文原石x1
                                    第十一名-第二十名 荣誉x2800 钻石x25
                                    第二十一名-第三十名 荣誉x2000 钻石x20
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({daochang: !this.state.daochang})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}道场
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({daochang: !this.state.daochang})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.daochang}>
                            通关/扫荡可以获得装备精炼用的结晶
                            通关1星解锁神器，通关5星觉醒神器(属性翻倍)，兽人酋长除外
                            每天免费扫荡3次，扫荡4次必出完美结晶
                            完美结晶每次扫荡最多出1个
                            道场概率：
                                    破碎结晶 100%
                                    瑕疵结晶 70%
                                    完美结晶 25%-50%
                        </Panel>
 
                        <Panel header={<div onClick={()=>this.setState({team: !this.state.team})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}战队
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({team: !this.state.team})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.team}>
                            玩法：
                                    满5人队长可以报名
                                    比赛持续6天 冷却1天
                                    冷却时间结束可以继续报名/参加其他战队
                                    比赛结束前退出战队无冷却，无奖励
                                    比赛进行时战队成员推图获得积分(图越高积分越多，1-1000大概110万积分)
                                    道场，扫荡不计算积分
                                    战队积分为成员积分总和，根据战队积分进行排名
                                    积分为0无奖励
                            奖励：
                                    时装币 20%~80%
                                    探险药水 40%~60%
                                    战斗药水 40%~60%
                                    排名越高概率越大
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({arena: !this.state.arena})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}锦标赛
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({arena: !this.state.arena})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.arena}>
                            玩法：周二15:00-17:00进行3场16进8，间隔1小时
                                    19:00-21:00进行3场8进4，间隔1小时
                                 周三15:00-17:00进行3场4进2，间隔1小时
                                    19:00-2200进行5局3胜决赛，前三场间隔1小时，后两场间隔半小时
                                锦标币可以支持每场比赛中任意一名玩家，最多支持10次，每次最多1000锦标币
                                锦标赛开始免费发放1000锦标币，每场比赛结束发放300锦标币
                                支持的玩家获胜获得双倍锦标币
                            奖励：
                                冠军 荣誉x2000 钻石x300
                                亚军 荣誉x1000 钻石x150
                                4强 荣誉x800 钻石x100
                                8强 荣誉x500 钻石x50
                                16强 荣誉x? 钻石x?
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({zhantuan: !this.state.zhantuan})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}战团
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({zhantuan: !this.state.zhantuan})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.zhantuan}>
                            玩法：
                                3名玩家一起推图，每位玩家设置自己的战团技能
                                关卡进度共享
                                战团关卡不会超过团员中最高转生
                                战团中符文无效，探险宠物有效
                                挑战成功可扫荡低于自身转生的关卡(7转可以扫0-6转关卡但不可扫7转关卡)
                                扫荡收益不可在交易所交易
                                转生差距越大 扫荡收益越高
                                7转扫荡收益：
                                    扫0转 28小时
                                    扫1转 24小时
                                    扫2转 20小时
                                    扫3转 17小时
                                    扫4转 14小时
                                    扫5转 11小时
                                    扫6转 8小时
                            概率：
                                所有的图纸掉落 5%
                                通用神魂掉落 100%
                                部位材料 50%
                        </Panel>
                        
                        <Panel header={<div onClick={()=>this.setState({tower: !this.state.tower})}>
                                        <img src={"app/icons/Placeholder.jpg"} />
                                        {"  "}螺旋塔
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({tower: !this.state.tower})}></i></div>} 
                                bsStyle="default"
                                collapsible
                                expanded={this.state.tower}>
                            XXXXXX
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}
                            
                    
                    
                        
                    
                