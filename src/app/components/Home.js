import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Panel, Button } from "react-bootstrap";

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
        const hideornot1 = ((this.state.stock)?"inline":"none");

        const hidePic1 = {
            display: hideornot1
        };

        const hideornot2 = ((this.state.blackmarket)?"inline":"none");

        const hidePic2 = {
            display: hideornot2
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
                                        <img src={"/app/icons/Placeholder.jpg"} />
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
                                        <div className="col-sm-6">
                                            <div className="thumbnail">
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                <div className="caption">
                                                    <h3>皇家证明</h3>
													<h3>￥28/30天</h3>
                                                    <hr />
													<div className="row">
														<div className="col-lg-5 col-lg-offset-1 col-sm-12 padding-0">
		                                                	<p className="well padding-1" style={{margin:"auto", maxWidth:"190px", borderStyle:"solid"}}>
		                                                        <span className="label label-default">每日获得</span><br />
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
			                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石&nbsp;x100
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉&nbsp;x50
																</p>
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买Zeny&nbsp;x1
																</p>
															</p>
														</div>
														<div className="col-lg-5 col-sm-12 padding-0">
															<p className="well padding-1" style={{margin:"auto", maxWidth:"190px", borderStyle:"solid"}}>
																<span className="label label-default">持续特权</span><br />
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%
																</p>
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解除所有购买次数上限
																</p>
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能
																</p>
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%
																</p>
																<p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播
																</p>
															</p>
														</div>
													</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="thumbnail">
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                <div className="caption">
                                                    <h3>皇家纹章</h3>
													<h3>￥118/90天</h3>
                                                    <hr />
													<div className="row">
														<div className="col-lg-5 col-lg-offset-1 col-sm-12 padding-0">
		                                                    <p className="well padding-1" style={{margin:"auto",maxWidth:"208px"}}>
		                                                        <span className="label label-default">每日获得</span>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石 x100
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x50
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买zeny x1
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;熔炼值 x2000
																</p>
		                                                        	<span className="label label-default">每五天获得</span>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;时装币 x1
																</p>
															</p>
														</div>
														<div className="col-lg-5 col-sm-12 padding-0">
															<p className="well padding-1" style={{margin:"auto",maxWidth:"208px"}}>
																<span className="label label-default">持续特权</span><br />
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;战斗跟随宠物经验 +50%
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;随意进入爆满聊天室
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务上限 +2
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解除所有购买次数上限
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播
																</p>
		                                                        <p style={{paddingLeft:"2em", textIndent:"-0.5em"}}>
		                                                        	<i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;螺旋塔免费连续调整
																</p>
		                                                    </p>
														</div>
													</div>
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
                                                        <img src={"/app/icons/Placeholder.jpg"} />
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
                                                        <img src={"/app/icons/Placeholder.jpg"} />
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
                                                        <img src={"/app/icons/Placeholder.jpg"} />
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
                                                <img src={"/app/icons/Placeholder.jpg"} />
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
                                                <img src={"/app/icons/Placeholder.jpg"} />
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
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}波利狂宴 - 解锁:1转生
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
	                                                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;奖励</th>
	                                                <th>条件</th>
	                                                <th>奖品</th>
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
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}波利股市 - 解锁:1转生
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
                                <div key={hideornot1} className="thumbnail" style={hidePic1}>
                                    <img src={"/app/icons/Placeholder.jpg"} style={{height:"156px"}} />
                                </div>
                            </div>
                        </div>

                        <Panel header={<div onClick={()=>this.setState({checkin: !this.state.checkin})}>
                                        <img src={"/app/icons/Placeholder.jpg"} />
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
                                                <img src={"/app/icons/Placeholder.jpg"} />
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

                                <Panel header={<div onClick={()=>this.setState({blackmarket: !this.state.blackmarket})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}黑市
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({blackmarket: !this.state.blackmarket})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.blackmarket}>
                                    展示6个随机道具，价格可能是钻石或Zeny<br />
                                    <div className="panel panel-default">
                                        <div className="panel-heading">黑市道具</div>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                白色宠物碎片 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                绿色宠物碎片 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                蓝色宠物碎片 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                紫色宠物碎片 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                橙色宠物碎片 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                神之金属 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                装备 x1
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                1/2/3级宝石 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                Boss扫荡卷 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                            <li className="list-group-item">
                                                星魂经验 x?
                                                <span className="badge">钻石 x?</span>
                                                <span className="badge">Zeny x?</span>
                                            </li>
                                        </ul>

                                        <div className="panel-footer">
                                            手动刷新价格 钻石 x10/?/?<br />
                                            刷新时间 ?小时<br />
                                            随机出现2/4/6/8折扣
                                        </div>
                                    </div>
                                </Panel>
                                <div key={hideornot2} className="thumbnail" style={hidePic2}>
                                    <img src={"/app/icons/Placeholder.jpg"} style={{height:"156px"}} />
                                </div>
                            </div>

                            <div className="col-md-7">
                                <Panel header={<div onClick={()=>this.setState({store: !this.state.store})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
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

                        <div className='row'>
                            <div className='col-md-4'>
                                <Panel header={<div onClick={()=>this.setState({trade: !this.state.trade})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}交易所 - 解锁:0转400关/1转生
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({trade: !this.state.trade})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.trade}>
                                    可以用Zeny购买其他玩家道具<br />
                                    或者把道具出售给其他玩家<br />
                                    购买谁的物品纯随机<br />
                                    最多上架道具 x10<br />
                                    上架费用最高Zeny x10000
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>交易税</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                单价1-9999
                                                <span className='badge'>2%</span>
                                            </li>
                                            <li className='list-group-item'>
                                                单价10000-99999
                                                <span className='badge'>4%</span>
                                            </li>
                                            <li className='list-group-item'>
                                                单价100000-999999
                                                <span className='badge'>6%</span>
                                            </li>
                                            <li className='list-group-item'>
                                                单价1000000-9999999
                                                <span className='badge'>8%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Panel>
                                <Panel header={<div onClick={()=>this.setState({team: !this.state.team})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}战队 - 解锁:通过第200关
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({team: !this.state.team})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.team}>
                                    比赛持续6天, 冷却1天<br />
                                    冷却时间不能报名/参加其他战队<br />
                                    比赛结束前退出战队无冷却，无奖励<br />
                                    比赛进行时战队成员推图获得积分<br />
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>战队奖励</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>时装币
                                                <span className='badge'>20%~80%</span>
                                            </li>
                                            <li className='list-group-item'>探险药水
                                                <span className='badge'>40%~60%</span>
                                            </li>
                                            <li className='list-group-item'>战斗药水
                                                <span className='badge'>40%~60%</span>
                                            </li>
                                        </ul>
                                        <div className='panel-footer'>
                                            排名越高概率越大<br />
                                            0积分无奖励
                                        </div>
                                    </div>
                                </Panel>
                            </div>

                            <div className='col-md-4'>
                                <Panel header={<div onClick={()=>this.setState({blacksmith: !this.state.blacksmith})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}铁匠
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({blacksmith: !this.state.blacksmith})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.blacksmith}>
                                    熔炼装备(最多同时6个)获得熔炼值<br />
                                    熔炼时有概率获得更高品质装备<br />
                                    橙装有概率获得神之水晶<br />
                                    熔炼值可以打造装备
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>熔炼值获得</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                白色装备
                                                <span className='badge'>熔炼值 x?</span>
                                            </li>
                                            <li className='list-group-item'>
                                                绿色装备
                                                <span className='badge'>熔炼值 x?</span>
                                            </li>
                                            <li className='list-group-item'>
                                                蓝色装备
                                                <span className='badge'>熔炼值 x?</span>
                                            </li>
                                            <li className='list-group-item'>
                                                紫色装备
                                                <span className='badge'>熔炼值 x100</span>
                                            </li>
                                            <li className='list-group-item'>
                                                橙色装备
                                                <span className='badge'>熔炼值 x?</span>
                                            </li>
                                            <li className='list-group-item' style={{height:"80px"}}>
                                                <span className='badge'>熔炼值 x500</span><br />
                                                红色装备(神衣)
                                                <span className='badge'>重铸碎片 x10</span><br />
                                                <span className='badge'>传奇宝石 x1-3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>神衣熔炼价格</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                传奇宝石 x1
                                                <span className='badge'>钻石 x0</span>
                                            </li>
                                            <li className='list-group-item'>
                                                传奇宝石 x2
                                                <span className='badge'>钻石 x200</span>
                                            </li>
                                            <li className='list-group-item'>
                                                传奇宝石 x3
                                                <span className='badge'>钻石 x500</span>
                                            </li>
                                        </ul>
                                        <div className='panel-footer'>只有红色属性可以打造成传奇宝石</div>
                                    </div>
                                </Panel>
                            </div>
                            <div className='col-md-4'>
                                <Panel header={<div onClick={()=>this.setState({daochang: !this.state.daochang})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}道场 - 解锁:通过第60关
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({daochang: !this.state.daochang})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.daochang}>
                                    通关/扫荡获得装备精炼结晶<br />
                                    通关1星解锁神器<br />
                                    通关5星觉醒神器(属性翻倍)<br />
                                    每天免费扫荡3次<br />
                                    扫荡4次必出完美结晶<br />
                                    完美结晶每次扫荡最多出1个
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>道场概率</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                破碎结晶
                                                <span className='badge'>100%</span>
                                            </li>
                                            <li className='list-group-item'>
                                                瑕疵结晶
                                                <span className='badge'>70%</span>
                                            </li>
                                            <li className='list-group-item'>
                                                完美结晶
                                                <span className='badge'>25-50%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Panel>
                            </div>
                        </div>

                        <Panel header={<div onClick={()=>this.setState({friend: !this.state.friend})}>
                                        <img src={"/app/icons/Placeholder.jpg"} />
                                        {"  "}好友
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({friend: !this.state.friend})}></i></div>}
                                bsStyle="default"
                                collapsible
                                expanded={this.state.friend}>
                            <div className='row'>
                                <div className='col-md-8'> {/* Change to individual items in future */}
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>好友送礼</div>
                                        <table className="table table-striped table-condensed">
                                            <thead>
                                                <tr>
                                                    <th>礼物</th>
                                                    <th>价格</th>
                                                    <th>奖励</th>
                                                    <th>对方获得</th>
                                                    <th>每日限制</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>摸头</td>
                                                    <td></td>
                                                    <td>荣誉 x50<br />羁绊 x?</td>
                                                    <td></td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>冰雕玫瑰</td>
                                                    <td>钻石 x50</td>
                                                    <td>获得荣誉 x300<br />羁绊 x50</td>
                                                    <td></td>
                                                    <td>2种玫瑰选1</td>
                                                </tr>
                                                <tr>
                                                    <td>永恒玫瑰</td>
                                                    <td>钻石 x500</td>
                                                    <td>获得荣誉 x500<br />羁绊 x300</td>
                                                    <td></td>
                                                    <td>2种玫瑰选1</td>
                                                </tr>
                                                <tr>
                                                    <td>棒棒糖</td>
                                                    <td>礼物币 x10</td>
                                                    <td>?</td>
                                                    <td>钻石 x10<br />小奖励</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>二克拉钻石</td>
                                                    <td>礼物币 x250</td>
                                                    <td>?</td>
                                                    <td>对方获得钻石 x125<br />丰厚奖励</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>神秘紫箱</td>
                                                    <td>礼物币 x888</td>
                                                    <td>?</td>
                                                    <td>超丰厚奖励</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>世界之星钻石</td>
                                                    <td>礼物币x6180</td>
                                                    <td>?</td>
                                                    <td>钻石x3090<br />极丰厚奖励</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>送特权</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                皇家证明
                                                <span className='badge'>礼物币 x280</span>
                                            </li>
                                            <li className='list-group-item'>
                                                皇家纹章
                                                <span className='badge'>礼物币 x1100</span>
                                            </li>
                                            <li className='list-group-item'>
                                                宠物大师证明
                                                <span className='badge'>礼物币 x280</span>
                                            </li>
                                            <li className='list-group-item'>
                                                佣兵公会证明
                                                <span className='badge'>礼物币 x280</span>
                                            </li>
                                            <li className='list-group-item'>
                                                卢恩商会证明
                                                <span className='badge'>礼物币 x280</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Panel>


                        <Panel header={<div onClick={()=>this.setState({guild: !this.state.guild})}>
                                        <img src={"/app/icons/Placeholder.jpg"} />
                                        {"  "}公会 - 解锁:通过第28关
                                        <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({guild: !this.state.guild})}></i></div>}
                                bsStyle="default"
                                collapsible
                                expanded={this.state.guild}>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='panel panel-default'>
                                                <div className='panel-heading'>职位</div>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>会长 x1</li>
                                                    <li className='list-group-item'>副会长 x?</li>
                                                    <li className='list-group-item'>精英 x?</li>
                                                    <li className='list-group-item'>会员 x?</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='panel panel-default'>
                                                <div className='panel-heading'>公会问答奖励</div>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>钻石 x20<span className='badge'>答对1题</span></li>
                                                    <li className='list-group-item'>芒果 x5<span className='badge'>答对2题</span></li>
                                                    <li className='list-group-item'>钻石 x30<span className='badge'>答对4题</span></li>
                                                    <li className='list-group-item'>高级探险药水 x5<span className='badge'>答对6题</span></li>
                                                    <li className='list-group-item'>钻石 x50<span className='badge'>答对8题</span></li>
                                                    <li className='list-group-item'>时装币 x1<span className='badge'>答对10题</span></li>
                                                </ul>
                                                <div className='panel-footer'>大概每3星期一次<br />总共10题</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>公会红包</div>
                                        <table className="table table-striped table-condensed">
                                            <thead>
                                                <tr>
                                                    <th>数量</th>
                                                    <th>价格</th>
                                                    <th>奖励</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>25份</td>
                                                    <td>礼物币 x2000</td>
                                                    <td>荣誉 x600</td>
                                                </tr>
                                                <tr>
                                                    <td>50份</td>
                                                    <td>礼物币 x5000</td>
                                                    <td>荣誉 x1800</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='panel panel-default'>
                                            <div className='panel-heading'>红包奖品</div>
                                            <ul className='list-group'>
                                                <li className='list-group-item'>钻石 x18</li>
                                                <li className='list-group-item'>钻石 x25</li>
                                                <li className='list-group-item'>钻石 x50</li>
                                                <li className='list-group-item'>钻石 x66</li>
                                                <li className='list-group-item'>钻石 x99</li>
                                                <li className='list-group-item'>Boss扫荡卷 x5</li>
                                                <li className='list-group-item'>2级宝石 x1</li>
                                                <li className='list-group-item'>绿糖果 x1</li>
                                                <li className='list-group-item'>草莓 x3</li>
                                                <li className='list-group-item'>西瓜 x2</li>
                                                <li className='list-group-item'>哈密瓜 x1</li>
                                                <li className='list-group-item'>?? x?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>公会战</div>
                                        <div className='panel-body'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='panel panel-default'>
                                                        <div className='panel-heading'>公会战流程</div>
                                                        <ul className='list-group'>
                                                            <li className='list-group-item'>周日20:00至周三 获得报名资格</li>
                                                            <li className='list-group-item'>周四有公会成员登录 自动报名</li>
                                                            <li className='list-group-item'>周五0:00至20:00 分配对手</li>
                                                            <li className='list-group-item'>周五20:00至周六20:00 准备</li>
                                                            <li className='list-group-item'>周六20:00至周日20:00 战斗</li>
                                                        </ul>
                                                        <div className='panel-footer'>
                                                            报名资格<br />
                                                            1.累计荣誉超过30000<br />
                                                            2.会长/副会长登录过<br />
                                                            报名结束后加入的会员不可参战
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='panel panel-default'>
                                                        <div className='panel-heading'>公会战奖励</div>
                                                        <ul className='list-group'>
                                                            <li className='list-group-item'>荣誉 x6000 (胜利)</li>
                                                            <li className='list-group-item'>荣誉 x4000 (失败)</li>
                                                            <li className='list-group-item'>钻石 x?</li>
                                                            <li className='list-group-item'>水果 x?</li>
                                                            <li className='list-group-item'>初级探险药水 x?</li>
                                                            <li className='list-group-item'>?? x?</li>
                                                        </ul>
                                                        <div className='panel-footer'>
                                                            不参与也可获得奖励<br />
                                                            点击“结算查看”领取奖励<br />
                                                            失败下次胜利增加20%奖励<br />
                                                            累计加成最高100%<br />
                                                            累计加成换公会依然存在
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>

                        <div className='row'>
                            <div className='col-md-7'>
                                <Panel header={<div onClick={()=>this.setState({pvp: !this.state.pvp})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}决斗 - 解锁:通过第32关
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({pvp: !this.state.pvp})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.pvp}>
                                    每周分配30名同转生 战力接近的玩家组成小组<br />
                                    一周未登录不匹配<br />
                                    进行战斗消耗入场券 x1<br />
                                    一张入场券失败1次或3连胜失效<br />
                                    入场券每12小时获得一张，最多2张(已有2张不计时)<br />
                                    入场券价格: 50/100/100/200/200/300/300/400/400/500(最高)<br />
                                    周日21:00结算，24:00发送奖励<br />
                                    战胜对手获得积分，积分获得与战力差有关，最少30，最高？
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>决斗奖励</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                第一名
                                                <span className='badge'>荣誉 x6000</span>
                                                <span className='badge'>钻石 x150</span><br />
                                                <span className='badge'>神秘宠物水晶/神秘符文原石 x10</span>
                                            </li>
                                            <li className='list-group-item'>
                                                第二名
                                                <span className='badge'>荣誉 x5000</span>
                                                <span className='badge'>钻石 x130</span><br />
                                                <span className='badge'>神秘宠物水晶/神秘符文原石 x5</span>
                                            </li>
                                            <li className='list-group-item'>
                                                第三名
                                                <span className='badge'>荣誉 x4500</span>
                                                <span className='badge'>钻石 x125</span><br />
                                                <span className='badge'>神秘宠物水晶/神秘符文原石 x3</span>
                                            </li>
                                            <li className='list-group-item'>
                                                第四名-第十名
                                                <span className='badge'>荣誉 x3600</span>
                                                <span className='badge'>钻石 x50</span><br />
                                                <span className='badge'>神秘宠物水晶/神秘符文原石 x1</span>
                                            </li>
                                            <li className='list-group-item'>
                                                第十一名-第二十名
                                                <span className='badge'>荣誉 x2800</span>
                                                <span className='badge'>钻石 x25</span>
                                            </li>
                                            <li className='list-group-item'>
                                                第二十一名-第三十名
                                                <span className='badge'>荣誉 x2000</span>
                                                <span className='badge'>钻石 x20</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Panel>
								<Panel header={<div onClick={()=>this.setState({tower: !this.state.tower})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}螺旋塔 - 解锁:2转生通过第400关
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({tower: !this.state.tower})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.tower}>
                                    总共300章 每章3关<br />
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='panel panel-default'>
                                                <div className='panel-heading'>螺旋塔增益</div>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>HP+4%</li>
                                                    <li className='list-group-item'>攻速+5%</li>
                                                    <li className='list-group-item'>命中+5%</li>
                                                    <li className='list-group-item'>SP+6%</li>
                                                    <li className='list-group-item'>吟唱+5%</li>
                                                    <li className='list-group-item'>回避+5%</li>
                                                    <li className='list-group-item'>魔防+8%</li>
                                                    <li className='list-group-item'>暴击+5%</li>
                                                    <li className='list-group-item'>物防+8%</li>
                                                    <li className='list-group-item'>双攻+5%</li>
                                                </ul>
                                                <div className='panel-footer'>
                                                    兑换价格:<br />
                                                    &nbsp;&nbsp;20+5*n<br />
                                                    &nbsp;&nbsp;n代表已兑换次数
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='panel panel-default'>
                                                        <div className='panel-heading'>星魂兑换</div>
                                                        <ul className='list-group'>
                                                            <li className='list-group-item'>2转
                                                                <span className='badge'>螺旋碎片 x150</span>
                                                            </li>
                                                            <li className='list-group-item'>3转
                                                                <span className='badge'>螺旋碎片 x?</span>
                                                            </li>
                                                            <li className='list-group-item'>4转
                                                                <span className='badge'>螺旋碎片 x?</span>
                                                            </li>
                                                            <li className='list-group-item'>5转
                                                                <span className='badge'>螺旋碎片 x?</span>
                                                            </li>
                                                            <li className='list-group-item'>6转
                                                                <span className='badge'>螺旋碎片 x?</span>
                                                            </li>
                                                            <li className='list-group-item'>7转
                                                                <span className='badge'>螺旋碎片 x300</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='panel panel-default'>
                                                        <div className='panel-heading'>星魂经验兑换</div>
                                                        <ul className='list-group'>
                                                            <li className='list-group-item'>星魂经验(10)
                                                                <span className='badge'>37.5%</span>
                                                            </li>
                                                            <li className='list-group-item'>星魂经验(50)
                                                                <span className='badge'>37.5%</span>
                                                            </li>
                                                            <li className='list-group-item'>星魂经验(100)
                                                                <span className='badge'>12.5%</span>
                                                            </li>
                                                            <li className='list-group-item'>星魂经验(1000)
                                                                <span className='badge'>12.5%</span>
                                                            </li>
                                                        </ul>
                                                        <div className='panel-footer'>
                                                            价格: 螺旋碎片 x50<br />
                                                            概率纯属猜测
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            </div>
                            <div className='col-md-5'>
                                <Panel header={<div onClick={()=>this.setState({arena: !this.state.arena})}>
                                                <img src={"/app/icons/Placeholder.jpg"} />
                                                {"  "}锦标赛 - 解锁:通过第250关
                                                <i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({arena: !this.state.arena})}></i></div>}
                                        bsStyle="default"
                                        collapsible
                                        expanded={this.state.arena}>
                                    锦标币可以支持每场比赛中任意一名玩家<br />
                                    最多支持10次，每次最多1000锦标币<br />
                                    锦标赛开始免费发放1000锦标币<br />
                                    每场比赛结束发放300锦标币<br />
                                    支持的玩家获胜获得双倍锦标币
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>锦标赛流程</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                周二<br />
                                                15:00-17:00进行3场16进8，间隔1小时<br />
                                                19:00-21:00进行3场8进4，间隔1小时
                                            </li>
                                            <li className='list-group-item'>
                                                周三<br />
                                                15:00-17:00进行3场4进2，间隔1小时<br />
                                                19:00-2200进行5局3胜决赛<br />
                                                前三场间隔1小时，后两场间隔半小时
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>锦标赛奖励</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                冠军
                                                <span className='badge'>荣誉 x2000</span>
                                                <span className='badge'>钻石 x300</span>
                                            </li>
                                            <li className='list-group-item'>
                                                亚军
                                                <span className='badge'>荣誉 x1000</span>
                                                <span className='badge'>钻石 x150</span>
                                            </li>
                                            <li className='list-group-item'>
                                                4强
                                                <span className='badge'>荣誉 x800</span>
                                                <span className='badge'>钻石 x100</span>
                                            </li>
                                            <li className='list-group-item'>
                                                8强
                                                <span className='badge'>荣誉 x500</span>
                                                <span className='badge'>钻石 x50</span>
                                            </li>
                                            <li className='list-group-item'>
                                                16强
                                                <span className='badge'>荣誉 x?</span>
                                                <span className='badge'>钻石 x?</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>锦标赛兑换</div>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>初级探险经验药水 x1
                                                <span className='badge'>锦标币 x60</span>
                                            </li>
                                            <li className='list-group-item'>初级战斗经验药水 x1
                                                <span className='badge'>锦标币 x120</span>
                                            </li>
                                            <li className='list-group-item'>高级探险经验药水 x1
                                                <span className='badge'>锦标币 x300</span>
                                            </li>
                                            <li className='list-group-item'>高级战斗经验药水 x1
                                                <span className='badge'>锦标币 x1200</span>
                                            </li>
                                            <li className='list-group-item'>3级主属性宝石 x1
                                                <span className='badge'>锦标币 x1000</span>
                                            </li>
                                            <li className='list-group-item'>4级主属性宝石 x1
                                                <span className='badge'>锦标币 x3000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Panel>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
								<Panel header={<div onClick={()=>this.setState({zhantuan: !this.state.zhantuan})}>
												<img src={"/app/icons/Placeholder.jpg"} />
												{"  "}战团 - 解锁:通过第300关
												<i className="fa fa-chevron-right" id="collapseBtn" aria-hidden="true" onClick={()=>this.setState({zhantuan: !this.state.zhantuan})}></i></div>}
										bsStyle="default"
										collapsible
										expanded={this.state.zhantuan}>
									<div className='row'>
										<div className='col-md-7'>
											<div className='panel panel-default'>
												<div className='panel-heading'>玩法</div>
												<div className='panel-body'>
													3名玩家一起推图<br />
													每位玩家设置自己的战团技能<br />
													关卡进度共享<br />
													战团关卡不会超过团员中最高转生<br />
													战团中符文无效，探险宠物有效<br />
													挑战成功可扫荡低于自身转生的关卡<br />
													扫荡收益不可在交易所交易<br />
													转生差距越大 扫荡收益越高
												</div>
											</div>
											<div className='panel panel-default'>
												<div className='panel-heading'>战团概率</div>
												<ul className='list-group'>
													<li className='list-group-item'>图纸掉落
														<span className='badge'>5%</span>
													</li>
													<li className='list-group-item'>神魂掉落
														<span className='badge'>100%</span>
													</li>
													<li className='list-group-item'>部位材料
														<span className='badge'>50%</span>
													</li>
												</ul>
											</div>
										</div>
										<div className='col-md-5'>
											<div className='panel panel-default'>
												<div className='panel-heading'>7转扫荡收益</div>
												<ul className='list-group'>
													<li className='list-group-item'>扫0转
														<span className='badge'>28小时</span>
													</li>
													<li className='list-group-item'>扫1转
														<span className='badge'>24小时</span>
													</li>
													<li className='list-group-item'>扫2转
														<span className='badge'>20小时</span>
													</li>
													<li className='list-group-item'>扫3转
														<span className='badge'>17小时</span>
													</li>
													<li className='list-group-item'>扫4转
														<span className='badge'>14小时</span>
													</li>
													<li className='list-group-item'>扫5转
														<span className='badge'>11小时</span>
													</li>
													<li className='list-group-item'>扫6转
														<span className='badge'>8小时</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</Panel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
