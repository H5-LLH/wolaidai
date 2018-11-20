import React, { Component } from 'react';

import './apply.css';
import './apply1.css';
import './change.css';


class Apply extends Component {
   constructor(props) {
        super(props);
       
        this.state = {
            text:'',
           data:{"aaa":[
           {"min_installment":1028.13,"max_installment":1099.91,"defaults":true,"selectable":true,"tenor":"3M","installment":1103.26
           },{"min_installment":524.78,"max_installment":589.48,"selectable":true,"tenor":"6M","installment":592.55
           },{"min_installment":357.10,"max_installment":420.51,"selectable":true,"tenor":"9M","installment":423.56
           },{"min_installment":273.33,"max_installment":336.89,"selectable":true,"tenor":"12M","installment":339.99
         }]}
        }
    }
    handelChange(e){
     if(e.target.value>=5000&&e.target.value<=30000){
        this.setState({
            text:e.target.value-e.target.value%500,
        });
     }else if(e.target.value<5000) {
      this.setState({
            text:e.target.value,
            
        });
     }else {
      this.setState({
            text:30000,
            
        });
     }
      
      
    }

 
    render() {
        return (
  
  <div id="app" className="clearfix">
    <div data-reactroot="" className="FullScreen___3G_mI">
        <div className="FullScreen___2UNA1" >
            <div data-role="xlib-toast" className="Toast___2hwGa" ><p></p></div>
        </div>
        <div className="jdd-apply">
          <div className="jdd-apply-banner theme-classNameic img-apply-banner">
              <p className="title">最高可申请(元)</p>
              <p className="amount">30000</p>
              <p className="guider">借万元，日利息低至6元</p>
              <div className="point">
                  <p className="point-num">我的积分</p>
              </div>
          </div>
          <div>
               <div className="amount-box">
                  <div className="jdd-apply-form">                     
                          <div data-role="xlib-toast" className="Toast___2hwGa" >
                              <p></p>                     
                      </div>
                      <div className="jdd-form-input"><label htmlFor="amount">借多少</label>
                          <div data-role="xlib-input" className="Input___3_uXR" ><input  onChange={this.handelChange.bind(this)} value={this.state.text} type="tel" maxLength="5" placeholder="最低5000元，且为500倍数" name="amount" className="Input___3w_BR"  /><span className="Input___3mXBX">{
                            (()=>{
                              console.log(this.state.text)

                                if(this.state.text.toString().length>0){
                                  if(parseInt(this.state.text)>=5000){
                                    console.log('符合条件')
                                    return '';
                                  }else{
                                    console.log('不符合正确金额')

                                    return '请填写正确的申请金额';}
                             
                                }else{
                                  console.log('没有值')
                                  return ;
                                }

                            })()
                            

                            }

                          </span></div>
                      </div>



                      <div className="jdd-form-select"><label htmlFor="tenor">借多久</label>
                          <div data-role="xlib-select" className="Select___37wsQ">
                              <div className="Select___1uNMg">
                                  <div className="Select___3CZzX"><i className="Select___2tk0N"></i></div>
                              </div>
                                 {(()=>{
                                    if(this.state.text<5000||this.state.text==""){
                                      return (
                                          <select className="Select___3O2LI Select___2apkG " disabled={this.state.text>=5000?false:true} name="tenor">

                                            <option >选择贷款期限</option>
                                            <option ref='chioce'>6个月</option>
                                            <option ref='chioce'>9个月</option>
                                            <option ref='chioce'>12个月</option>
                                        </select>
                                        )
                                    }
                                  })()}

                                  {(()=>{
                                      if(this.state.text>=5000){
                                    return (
                                        <select  className="Select___3O2LI Select___2apkG " disabled={this.state.text>=5000?false:true} name="tenor">

                                          <option >选择贷款期限</option>
                                          <option >6个月</option>
                                          <option >9个月</option>
                                          <option >12个月</option>
                                        </select>
                                      )
                                  }
                                  })()
                                  
                                  
                                }
                                 
                                      

                                      

                                    
                          </div>
                      </div>
                      <div className="jdd-form-input"><label htmlFor="fee">月还款</label>
                          <div data-role="xlib-input" className="Input___3_uXR" style={{ paddingRight:'30px'}}><input value={this.state.data.aaa[0].min_installment+'~'+this.state.data.aaa[0].min_installment}  disabled="" name="fee" className="Input___3w_BR" /></div>
                      </div>
                  </div>
              </div>
               <div className="btn-box"><button className="btn theme-classNameic font-color-white bg-color border-color box-shadow">立即申请</button>
                  <div className="Modal___3X1Gj Modal___1rt0o">
                      <div className="WeChatModal___16Fzk">
                          <div className="WeChatModal___3pvt6"><img className="WeChatModal___2vqF4" src="https://web.wolaidai.com/img/jddv3/wx_tip_bg.png" alt="tip" />
                              <p className="WeChatModal___A5F4o">关注我来贷微信</p>
                              <p className="WeChatModal___nN8Nb">长按识别二维码</p>
                              <p className="WeChatModal___nN8Nb">
                                  <span className="WeChatModal___TCuFo">“我来贷”</span>
                              </p><span className="WeChatModal___k7BFq"></span>
                          </div>
                          <div className="WeChatModal___2BBlJ"><img className="WeChatModal___1d5mK" src="https://web.wolaidai.com/img/jddv3/wx_qrcode_apply.jpeg" alt="qrcode" />
                              <div className="WeChatModal___28nv4">
                                  <p className="WeChatModal___3Kbia">
                                      <span className="WeChatModal___2ZPhu">wolaidaichina</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <img src="//web.wolaidai.com/img/staff/credit_prompt_banner.png" alt="" className="credit-tip" />


    </div>
  </div>


        );
    }
}

export default Apply;