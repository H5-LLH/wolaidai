import React, { Component } from 'react';
import { Link } from "react-router-dom"; //跳转路由
import './Apply.css';
import '../../assert/css/base.css';
//引入顶部图片
import logo from '../../assert/img/logo.png';
//引入喇叭图片
import notice from '../../assert/img/notice.png';
class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <div data-reactroot="" className="page___1TpeS page___2aPQC undefined " style={{backgroundColor: "rgb(242, 242, 242)"}}>
          <div className="page___3yBhB">
            <div className="apply">
            {/*顶部图片*/}
              <div className="top"><div className="logo"><img className="logo-img" src={logo} alt="我来贷" /></div></div>
            {/*申请表单*/}
              <div className="amount-box">
              {/*通知轮转*/}
                <div className="notification">
                  <div className="Broadcasts___sIH1O" style={{height: "1.3rem"}}>
                    <div className="Broadcasts___f8p0b" style={{top: "0rem", height: "1.3rem"}}>
                      <div className="Broadcasts___kQ-FH" style={{height: "1.3rem", lineHeight: "1.3rem"}}>
                        <img src={notice} alt=""/>来自合肥的夏先生已成功放款<span>19300元</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/*申请信息*/}
                <div>
                  <div className="installment">
                    <div data-role="installment" className="Installment___2xwWU">
                    {/*借多少*/}
                      <div className="Installment___1w5hE">
                        <div className="Installment___2lJTr">
                          <div className="Installment____T8JD">
                            <div data-role="form-group" className="FormGroup___2ItNM form-group">
                              <div className="FormGroup___1SEJF">
                                <label>借多少</label>
                                  <div className="Installment___1dp63">
                                    <div data-role="xlib-input" className="Input___9cgsf" style={{paddingRight: "0px"}}>
                                      <input type="number" maxlength="5" placeholder="请输入100的整数倍" className="Input___1iYS0" value="3000" />
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/*借多少文本框大于5000时显示*/}
                      <div className="Installment___3aUCw">
                        <p>
                          <span style={{marginRight: "1.06rem"}}>
                            
                          </span>您最多可借50000元
                        </p>
                      </div>
                    {/*借多久*/}
                      <div className="Installment___1w5hE">
                        <div className="Installment___2lJTr">
                          <div className="Installment____T8JD">
                            <div data-role="form-group" className="FormGroup___2ItNM Installment___2Zsy1">
                              <div className="FormGroup___1SEJF">
                                <label>借多久</label>
                                  <div className="Installment___1dp63">
                                    <div className="picker___39CqX">12期
                                      <div className="Modal___1uYAl Modal___1gdzR" id="modal">
                                        <div className="picker___2sNPZ">
                                          <ul>
                                            <div className="picker___8iNiB" style={{color: "rgb(153, 153, 153)", fontSize: "15px"}}>6期</div>
                                            <div className="picker___8iNiB" style={{color: "rgb(153, 153, 153)", fontSize: "15px"}}>9期</div>
                                            <div className="picker___8iNiB" style={{color: "rgb(255, 93, 61)", fontSize: "18px"}}>12期</div>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                             <div className="Installment___3sVl8">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/*每月还款*/}
                      <div className="Installment___20BUa">每月还款
                        <span>273.33~336.89</span>
                          元
                          <span className="Installment___bHd-w">
                          <img src="/aif-jdd/imgs/instruction.png" alt=""/>
                        </span>
                      </div>
                      <div className="Modal___1uYAl Modal___1gdzR" id="modal">
                        <div className="InstallmentModal___2brdZ">
                          <div className="InstallmentModal___2CfZb">
                              <p className="InstallmentModal___Gy_zP">每月还款金额为
                                <span>273.33~336.89</span>元
                              </p>
                            <div className="InstallmentModal___LVAp3"><div><i></i></div>
                              <p>我来贷会根据您的信用属性，提供给您最终的贷款金额、期限及费率</p>
                            </div>
                            <div className="InstallmentModal___LVAp3"><div><i></i></div>
                              <p>真实填写信息，能够大幅提高借款成功率，享受低廉的贷款费率</p>
                            </div>
                          </div>
                        <div className="InstallmentModal___2fXog">我知道了</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-primary submit">立即拿钱</button>
              </div>
              
            </div>  
          </div>
        </div>
      </div>
        );
    }
}
export default Apply;