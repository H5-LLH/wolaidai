import React, { Component } from 'react';

import './creditcard.css';


class App extends Component {
  render() {
    return (
      <div style={{fontSize: '12px'}}>
          <div className="cp-spinner-mask"></div>
          <div className="cp-spinner-wrap">
              <div className="cp-spinner"></div>
          </div>
          <div className="credit_app">
              <div className="tips credit" id="credit-tips">
                  <span style={{color:'#999'}}>我来贷承诺确保您的信息安全</span>
              </div>
              <div className="container" id="credit-card" style={{paddingLeft:'0'}}>
                  <div className="form-icon-item c-card flex">
                      <label htmlFor="bankCard">请输入您经常使用的信用卡号</label>
                      <div style={{width: '100%'}}>
                          <input type="tel" placeholder="请输入信用卡号" name="bankCard" title="信用卡号" maxLength="19" id="bankCard"/>
                          <i id="clear-input" className="assets-error"></i>
                      </div>
                  </div>
                  <span id="tip-error" className="validation-error">请输入正确的银行卡号</span>
              </div>
              <div className="btn-box">
                  <button className="btn btn-wld" >提交</button>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
