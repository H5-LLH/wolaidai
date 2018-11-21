import React, { Component } from 'react';
import { Link } from "react-router-dom";


import '../Apply/apply.css';
import '../Apply/apply1.css';

class profile extends Component {
  constructor(props){
    super(props);
    this.state={
      showtime:false,
      showadress:false,
      recommend:''
    }
  }
  showtime(){
    this.setState({
      showtime:!this.state.showtime
    })
  }
  showadress(){
    this.setState({
      showadress:!this.state.showadress
    })
  }
  recommend(e){
    this.setState({
      recommend:e.target.value
    })
     /*React.axios.get("https://japi.wolaidai.com/application/api/v1/application/user/company/complete_name", {
            params: {
                name: e.target.value,
                city:'石家庄'

            }
        }).then((response) => {
            console.log(response);
            
        }).catch(function (error) {
            console.log(error);
        });*/

  }
  render() {
    return (
      <div id="app" className="clearfix" style={{fontSize: '12px', height: '755px'}}>
    <div data-reactroot="" className="FullScreen___3G_mI">
        <div className="no-footer profile FullScreen___2UNA1" >
            <div data-role="xlib-step" className="Step___2ezR6 Step___3CAWZ Step___39Wqj" >
                <div className="Step___28E4B Step___2Zgud">
                    <div className="Step___aeymK"></div>
                    <div className="Step___2y5v7"><span className="Step___1f1SU Step___a6URh Step___2VnMs"></span></div>
                    <div className="Step___mugiL">
                        <div className="Step___1jGeZ">身份确认</div>
                    </div>
                </div>
                <div className="Step___28E4B Step___3bgbx">
                    <div className="Step___aeymK"></div>
                    <div className="Step___2y5v7"><span className="Step___1f1SU">2</span></div>
                    <div className="Step___mugiL">
                        <div className="Step___1jGeZ">完善资料</div>
                    </div>
                </div>
                <div className="Step___28E4B Step___1azT4">
                    <div className="Step___aeymK"></div>
                    <div className="Step___2y5v7"><span className="Step___1f1SU">3</span></div>
                    <div className="Step___mugiL">
                        <div className="Step___1jGeZ">提交申请</div>
                    </div>
                </div>
            </div>
            <div className="section inMyData">
                <div className="weixuan">
                    <div className="SmartInput___ZzGZn" id="smartinput">
                        <div data-role="form-group" className="FormGroup___2qhXh">
                            <div className="FormGroup___Rc1SA"><label htmlFor="namegroup">工作单位</label>
                                <div data-role="xlib-input" className="Input___3_uXR" ><input onChange={this.recommend.bind(this)} value={this.state.recommend} placeholder="请填写签署劳动合同的单位名称" maxLength="50" className="Input___3w_BR" /></div>
                            </div>
                        </div>
                        <div className="SmartInput___1xN3Z" style={{ display: 'block' }}><i className="iconfont icon-xialax SmartInput___2FRLv"></i>
                            <ul className="SmartInput____5Hjo">
                              <li id="smartLi0">石家庄百度文化传播有限公司</li>
                            </ul>

                        </div>
                    </div>
                    <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                        <div className="FormGroup___Rc1SA"><label>入职时间</label>
                            <div className="DateSelect___1oGpe" onClick={this.showtime.bind(this)}><span className="DateSelect___oQKnc">2016 年 01 月</span>
                            <i className="iconfont icon-xinyongrenzhengyetiaozhuan DateSelect___1_1Oe"></i>
                                <div className={this.state.showtime?'Modal___3X1Gj Modal___U3o4P':"Modal___3X1Gj Modal___1rt0o"}>
                                    <div className="DateSelect___3YSsQ">
                                        <div className="DateSelect___2NK17"><a> 取消 </a><a className="theme-classNameic font-color-white bg-color"> 完成 </a></div>
                                        <div className="DateSelect___1YSTr">
                                            <div className="DateSelect___4FxBm">
                                                <li>2018 年 </li>
                                                <li>2017 年 </li>
                                                <li className="theme-classNameic font-color">2016 年 </li>
                                                <li>2015 年 </li>
                                                <li>2014 年 </li>
                                                <li>2013 年 </li>
                                                <li>2012 年 </li>
                                                <li>2011 年 </li>
                                                <li>2010 年 </li>
                                                <li>2009 年 </li>
                                                <li>2008 年 </li>
                                                <li>2007 年 </li>
                                                <li>2006 年 </li>
                                                <li>2005 年 </li>
                                                <li>2004 年 </li>
                                                <li>2003 年 </li>
                                                <li>2002 年 </li>
                                                <li>2001 年 </li>
                                                <li>2000 年 </li>
                                                <li>1999 年 </li>
                                                <li>1998 年 </li>
                                                <li>1997 年 </li>
                                                <li>1996 年 </li>
                                                <li>1995 年 </li>
                                                <li>1994 年 </li>
                                                <li>1993 年 </li>
                                                <li>1992 年 </li>
                                                <li>1991 年 </li>
                                                <li>1990 年 </li>
                                                <li>1989 年 </li>
                                                <li>1988 年 </li>
                                                <li>1987 年 </li>
                                                <li>1986 年 </li>
                                                <li>1985 年 </li>
                                                <li>1984 年 </li>
                                                <li>1983 年 </li>
                                                <li>1982 年 </li>
                                                <li>1981 年 </li>
                                                <li>1980 年 </li>
                                                <li>1979 年 </li>
                                                <li>1978 年 </li>
                                                <li>1977 年 </li>
                                                <li>1976 年 </li>
                                                <li>1975 年 </li>
                                                <li>1974 年 </li>
                                                <li>1973 年 </li>
                                                <li>1972 年 </li>
                                                <li>1971 年 </li>
                                                <li>1970 年 </li>
                                            </div>
                                            <div className="DateSelect___4FxBm">
                                                <li className="theme-classNameic font-color">01 月</li>
                                                <li>02 月</li>
                                                <li>03 月</li>
                                                <li>04 月</li>
                                                <li>05 月</li>
                                                <li>06 月</li>
                                                <li>07 月</li>
                                                <li>08 月</li>
                                                <li>09 月</li>
                                                <li>10 月</li>
                                                <li>11 月</li>
                                                <li>12 月</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: 'none'}}>
                                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                        <div className="FormGroup___Rc1SA" ><label>单位地址</label>
                            <div className="Location___1dShG" onClick={this.showadress.bind(this)}><span className="Location___1_K-1">河北省 石家庄市 桥东区</span>
                            <i className="iconfont icon-xinyongrenzhengyetiaozhuan Location___2nq8r"></i>
                                <div className={this.state.showadress?'Modal___3X1Gj Modal___U3o4P':"Modal___3X1Gj Modal___1rt0o"}>
                                    <div className="Location___1JRyr">
                                        <div className="Location___dpeeu"><a> 取消 </a><a className="theme-classNameic font-color-white bg-color"> 完成 </a></div>
                                        <div className="Location___2_lkZ">
                                            <div className="Location___1BPn9">
                                                <li>北京市</li>
                                                <li>天津市</li>
                                                <li className="theme-classNameic font-color">河北省</li>
                                                <li>山西省</li>
                                                <li>内蒙古自治区</li>
                                                <li>辽宁省</li>
                                                <li>吉林省</li>
                                                <li>黑龙江省</li>
                                                <li>上海市</li>
                                                <li>江苏省</li>
                                                <li>浙江省</li>
                                                <li>安徽省</li>
                                                <li>福建省</li>
                                                <li>江西省</li>
                                                <li>山东省</li>
                                                <li>河南省</li>
                                                <li>湖北省</li>
                                                <li>湖南省</li>
                                                <li>广东省</li>
                                                <li>广西壮族自治区</li>
                                                <li>海南省</li>
                                                <li>重庆市</li>
                                                <li>四川省</li>
                                                <li>贵州省</li>
                                                <li>云南省</li>
                                                <li>西藏自治区</li>
                                                <li>陕西省</li>
                                                <li>甘肃省</li>
                                                <li>青海省</li>
                                                <li>宁夏回族自治区</li>
                                                <li>新疆维吾尔自治区</li>
                                            </div>
                                            <div className="Location___1BPn9">
                                                <li className="theme-classNameic font-color">石家庄市</li>
                                                <li>唐山市</li>
                                                <li>秦皇岛市</li>
                                                <li>邯郸市</li>
                                                <li>邢台市</li>
                                                <li>保定市</li>
                                                <li>张家口市</li>
                                                <li>承德市</li>
                                                <li>沧州市</li>
                                                <li>廊坊市</li>
                                                <li>衡水市</li>
                                                <li>定州市</li>
                                                <li>省直辖县级行政区划</li>
                                            </div>
                                            <div className="Location___1BPn9">
                                                <li>长安区</li>
                                                <li className="theme-classNameic font-color">桥东区</li>
                                                <li>桥西区</li>
                                                <li>新华区</li>
                                                <li>井陉矿区</li>
                                                <li>裕华区</li>
                                                <li>井陉县</li>
                                                <li>正定县</li>
                                                <li>栾城县</li>
                                                <li>行唐县</li>
                                                <li>灵寿县</li>
                                                <li>高邑县</li>
                                                <li>深泽县</li>
                                                <li>赞皇县</li>
                                                <li>无极县</li>
                                                <li>平山县</li>
                                                <li>元氏县</li>
                                                <li>赵县</li>
                                                <li>辛集市</li>
                                                <li>藁城市</li>
                                                <li>晋州市</li>
                                                <li>新乐市</li>
                                                <li>鹿泉市</li>
                                                <li>市辖区</li>
                                                <li>藁城区</li>
                                                <li>鹿泉区</li>
                                                <li>栾城区</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: 'none'}}>
                                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>学历</label>
                        <div data-role="xlib-select" className="Select___37wsQ">
                            <div className="Select___1uNMg">
                                <div className="Select___3CZzX"><i className="Select___2tk0N"></i></div>
                            </div><select className="Select___3O2LI Select___31_AX">
                                <option value="">请选择学历</option>
                                <option value="10">高中及以下</option>
                                <option value="4">中专</option>
                                <option value="5">大专</option>
                                <option value="6">本科</option>
                                <option value="7">硕士</option>
                                <option value="8">博士</option>
                            </select><span className="Select___3C4GF" style={{display:'none'}}>无效的值...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                    <div className="FormGroup___Rc1SA"><label>现居住地</label>
                        <div className="Location___1dShG"><span className="Location___1_K-1">天津市 天津市 和平区</span>
                        <i className="iconfont icon-xinyongrenzhengyetiaozhuan Location___2nq8r"></i>
                            <div className="Modal___3X1Gj Modal___1rt0o">
                                <div className="Location___1JRyr">
                                    <div className="Location___dpeeu"><a> 取消 </a><a className="theme-classNameic font-color-white bg-color"> 完成 </a></div>
                                    <div className="Location___2_lkZ">
                                        <div className="Location___1BPn9">
                                            <li>北京市</li>
                                            <li className="theme-classNameic font-color">天津市</li>
                                            <li>河北省</li>
                                            <li>山西省</li>
                                            <li>内蒙古自治区</li>
                                            <li>辽宁省</li>
                                            <li>吉林省</li>
                                            <li>黑龙江省</li>
                                            <li>上海市</li>
                                            <li>江苏省</li>
                                            <li>浙江省</li>
                                            <li>安徽省</li>
                                            <li>福建省</li>
                                            <li>江西省</li>
                                            <li>山东省</li>
                                            <li>河南省</li>
                                            <li>湖北省</li>
                                            <li>湖南省</li>
                                            <li>广东省</li>
                                            <li>广西壮族自治区</li>
                                            <li>海南省</li>
                                            <li>重庆市</li>
                                            <li>四川省</li>
                                            <li>贵州省</li>
                                            <li>云南省</li>
                                            <li>西藏自治区</li>
                                            <li>陕西省</li>
                                            <li>甘肃省</li>
                                            <li>青海省</li>
                                            <li>宁夏回族自治区</li>
                                            <li>新疆维吾尔自治区</li>
                                        </div>
                                        <div className="Location___1BPn9">
                                            <li className="theme-classNameic font-color">天津市</li>
                                            <li>市辖区</li>
                                        </div>
                                        <div className="Location___1BPn9">
                                            <li className="theme-classNameic font-color">和平区</li>
                                            <li>河东区</li>
                                            <li>河西区</li>
                                            <li>南开区</li>
                                            <li>河北区</li>
                                            <li>红桥区</li>
                                            <li>东丽区</li>
                                            <li>西青区</li>
                                            <li>津南区</li>
                                            <li>北辰区</li>
                                            <li>武清区</li>
                                            <li>宝坻区</li>
                                            <li>滨海新区</li>
                                            <li>宁河县</li>
                                            <li>静海县</li>
                                            <li>蓟县</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'none'}}>
                                <div data-role="xlib-toast" className="Toast___2hwGa">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div data-role="form-group" className="FormGroup___2qhXh clearfix">
                    <div className="FormGroup___Rc1SA"><label>Ta是我的</label>
                        <form data-role="button-select" className="ButtonSelect___31h5z">
                            <div className="ButtonSelect___2pAHn"><input type="radio" id="btn_0" name="opt" value="parents" readOnly="" /><label data-value="parents" htmlFor="btn_0">父母</label></div>
                            <div className="ButtonSelect___2pAHn"><input type="radio" id="btn_1" name="opt" value="spouse" readOnly="" /><label data-value="spouse" htmlFor="btn_1">配偶</label></div>
                        </form>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>联系人</label>
                        <div data-role="xlib-input" className="Input___3_uXR" ><input placeholder="请填写联系人真实姓名" maxLength="10" className="Input___3w_BR" /></div>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>手机号码</label>
                        <div data-role="xlib-input" className="Input___3_uXR" ><input placeholder="请填写联系人11位手机号" maxLength="11" className="Input___3w_BR" /></div>
                    </div>
                </div>
            </div>
            <div className="tips">* 我来贷向您承诺：不会泄露您的借款信息</div>
            <div className="actions"><Link to="/jddv3/otherProveAuth" className="btn theme-classNameic font-color-white bg-color border-color box-shadow">提交极速审核</Link ></div>
            <div className="popup" style={{display:'none'}}>
                <div className="alert AlertPromptDialog___3q22C">
                    <div className="theme-classNameic img-auditing-bg AlertPromptDialog___1v-bS">
                        <div className="theme-classNameic img-auditing-scale AlertPromptDialog___gl9ST"></div>
                    </div>
                    <div className="AlertPromptDialog___58_Vg">正在极速审核...</div>
                </div>
            </div>
            <div style={{display:'none'}}>
                <div data-role="xlib-toast" className="Toast___2hwGa" >
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default profile;
