import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/home.css"
//import "../stylesheets/font-awesome.min.css"

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
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}领时装币
                            </div>
                            <div className="panel-body">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}精彩活动
                            </div>
                            <div className="panel-body">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}波利狂宴
                    </div>
                    <div className="panel-body">
                        玩法：从6x9=54个怪物中选择几个，开奖时如果选对了会获得钻石奖励。选择需要消耗狂宴门票
                        门票获取方法：每日17:00门面房赠送1张(邮箱领取)
                                    100礼物币购买，仅限1次(卢恩商会证明3次)
                        头等奖-选对3只 钻石x5000
                        二等奖-选对2只 钻石x200
                        三等奖-选对1只 钻石x50
                        每个奖励的怪物是分开的，头等奖3选3，二等奖2选2，三等奖4选1
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
                        每天签到获得奖励 注意并不是累计签到，而是几号签到领几号的奖励
                        1 Boss扫荡卷x1
                        2 钻石x20
                        3 紫色宠物碎片x5
                        4 西瓜x1
                        5 1级耐力宝石x1
                        6 Boss扫荡卷x2
                        7 钻石x25
                        8 紫色宠物碎片x10
                        9 西瓜x2
                        10 1级幸运宝石x1
                        11 Boss扫荡卷x3
                        12 钻石x30
                        13 紫色宠物碎片x15
                        14 西瓜x3
                        15 1级敏捷宝石x1
                        16 Boss扫荡卷x4
                        17 钻石x35
                        18 紫色宠物碎片x15
                        19 西瓜x4
                        20 1级力量宝石x1
                        21 Boss扫荡卷x5
                        22 钻石x40
                        23 紫色宠物碎片x15
                        24 西瓜x6
                        25 1级智力宝石x1
                        26 Boss扫荡卷x6
                        27 钻石x50
                        28 紫色宠物碎片x20
                        29 西瓜x8
                        30 1级灵巧宝石x1
                        31 Boss扫荡卷x6
                        每签到30天获得时装盒x1
                        
                        大事记记录：
                        1转生
                        2转生
                        3转生
                        4转生
                        5转生
                        6转生
                        7转生
                        第一次到达830关
                        第一次关注别人
                        第一次蜕变宠物
                        第一次决斗胜利
                        第一次合成宠物
                        第一天进入游戏
                    </div>
                </div>
            
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}生命研究所
                    </div>
                    <div className="panel-body">
                        每周三16个npc进行决斗
                        可以用竞猜币压哪个npc获胜，猜对翻倍(最高压1000)
                        竞猜币兑换表
                        初级探险经验药水x1 竞猜币x100
                        初级战斗经验药水x1 竞猜币x200
                        高级探险经验药水x1 竞猜币x500
                        高级战斗经验药水x1 竞猜币x2000
                        3级力量宝石x1 竞猜币x1800
                        3级灵巧宝石x1 竞猜币x1800
                        3级智力宝石x1 竞猜币x1800
                        4级力量宝石x1 竞猜币x5000
                        4级灵巧宝石x1 竞猜币x5000
                        4级智力宝石x1 竞猜币x5000
                    </div>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}商城
                    </div>
                    <div className="panel-body">
                        充值
                        钻石x7480 ￥648
                        钻石x3768 ￥328
                        钻石x1460 ￥128
                        钻石x768 ￥68
                        钻石x336 ￥30
                        钻石x66 ￥6
                        礼物币x500 ￥50
                        礼物币x1100 ￥108
                        礼物币x2800 ￥268
                        礼物币x5500 ￥518
                        每日抽 每天免费30次
                        奖励：
                        抽宠物 每天免费一次 抽1次 钻石x100 抽10次 钻石x880
                        每抽10次必获得宠物x1 获得所有宠物随机获得宠物碎片x40
                        抽宝图 每天免费一次 抽1次 钻石x100 抽10次 钻石x880
                        每抽10次必获得宝图碎片x1
                        兑换zeny
                        兑换120分钟的zeny收益
                        兑换价格20/?
                        时装
                        每星期刷一次
                        手动刷新价格 钻石x50
                        除武器，发型之外时装x6
                        音乐x1
                        武器x4
                        发型x4
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}黑市
                    </div>
                    <div className="panel-body">
                        展示6个随机道具，价格可能是钻石或zeny
                        随机出现2/4/6/8折扣
                        可能出现 白色宠物碎片，绿色宠物碎片，蓝色宠物碎片，紫色宠物碎片，橙色宠物碎片(只会出现已有宠物的碎片)，神之金属，装备，1/2/3级宝石，Boss扫荡卷
                        手动刷新价格10/?
                        刷新时间?
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}交易所
                    </div>
                    <div className="panel-body">
                        可以用Zeny购买其他玩家道具，或者把道具出售给其他玩家
                        购买谁的物品纯属随机
                        上架费用（不知道怎么算的）最高Zenyx10000
                        税率
                        单价1-9999 2%
                           10000-99999 4%
                           100000-999999 6%
                           1000000-9999999 8%
                        最多上架道具x10
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}铁匠
                    </div>
                    <div className="panel-body">
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
                    </div>
                </div>
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}好友
                    </div>
                    <div className="panel-body">
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