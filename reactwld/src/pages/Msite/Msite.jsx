import React, { Component } from 'react';

import './index.css';
import './common.css';


class Msite extends Component {
    render() {
        return (
            <div id="app">
        <div className="header">
            <div className="logo">
                <a href="index.html"><img src="data:image/png;base64,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" alt=""/></a>
            </div>
            <div className="nav-box">
                <div className="nav-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav hide">
                    <div className="nav-item">
                        <a href="./" className="fadeInRight" ><div className="nav-item-1 active" id="index">首页</div></a>
                    </div>
                    <div className="nav-item">
                        <div className="nav-item-1 noactive fadeInRight" >信贷产品 <span></span></div>
                        <a className="nav-item-2 fadeInRight"  id="loan" >消费信贷</a>
                        

                        <a className="nav-item-2 fadeInRight"  >消费分期</a>
                        <a className="nav-item-2 fadeInRight"  >信用租赁</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight"  >热门推荐</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight"  id="about" >关于我们</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight"  >加入我们</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 app_download fadeInRight"  >APP下载</a>
                    </div>
               </div>
            </div>
        </div>
        
        
        <div className="banner">
            <h2 className="tit">成为全球金融科技领导者</h2>
            <p className="text">借钱花钱 用我来贷分期更精明</p>
            <div className="btn show-popup"></div>

            <div className="bottom">
                <div className="item1 item"></div>
                <div className="item2 item"></div>
                <div className="item3 item"></div>
                <div className="item4"></div>
            </div>

            </div>

            <div className="section section_phjr">
            <h2 className="sec_tit">普惠金融</h2>
            <div className="sec_text">通过自主研发的科技提升金融服务以改善人民的生活</div>
            <div className="main-box">
                <a >
                    <div className="item item1">
                        <h3 className="item_tit">消费信贷</h3>
                    </div>
                </a>
                <a >
                    <div className="item item2">
                        <h3 className="item_tit">信用租赁</h3>
                    </div>
                </a>
                <a >
                    <div className="item item3">
                        <h3 className="item_tit">热门推荐</h3>
                    </div>
                </a>
                <a >
                    <div className="item item4">
                        <h3 className="item_tit">消费分期</h3>
                    </div>
                </a>

            </div>
        </div>

        <div className="section counts-section">
            <h1 className="rotate-lines pos-rel">千亿级别金融平台</h1>
            <p>为超过3000万用户提供金融服务</p>

            <div className="counts">
                <div className="item">
                    <div className="count-number">
                        <img src="https://m.wolaidai.com/msite/assets/img/section-04-icon-01.svg" />
                        <strong className="applied" id="applied">305,412,765,682</strong>
                    </div>
                    <span className="remark">在线申请金额(元)</span>
                </div>
                <div className="item">
                    <div className="count-number">
                        <img src="https://m.wolaidai.com/msite/assets/img/section-04-icon-02.svg" />
                        <strong className="register" id="register">33,149,305</strong>
                    </div>
                    <span className="remark">注册用户数(人)</span>
                </div>
            </div>
        </div>

        <div className="section section_jrkj">
            <h2 className="sec_tit">金融科技</h2>
            <div className="sec_text">最快 <span >3秒</span>输出信贷决策</div>
            <div className="main-box">
                <div className="item">
                    <div className="item_bg"></div>
                    <img src="assets/img/sec_03_item_01.png" alt=""  />
                    <div className="item_tit">大数据</div>
                    <div className="item_text">数千个信息维度</div>
                </div>
                <div className="item">
                    <div className="item_bg"></div>
                    <img src="assets/img/sec_03_item_02.png" alt=""  />
                    <div className="item_tit">人工智能</div>
                    <div className="item_text">解放人力提高效率</div>
                </div>
                <div className="item">
                    <div className="item_bg"></div>
                    <img src="assets/img/sec_03_item_03.png" alt=""  />
                    <div className="item_tit">数据分析</div>
                    <div className="item_text">3秒输出信贷决策</div>
                </div>
                <div className="item">
                    <div className="item_bg"></div>
                    <img src="assets/img/sec_03_item_04.png" alt=""  />
                    <div className="item_tit">机器学习</div>
                    <div className="item_text">深度学习快速迭代</div>
                </div>
            </div>
        </div>

        <div className="section section_news">
                <h2 className="sec_tit">新闻资讯</h2>
                <div className="sec_text" >海内外媒体广泛关注  上百家媒体采访报道</div>

                <div className="team-body">
                    <div className="swiper-container swiper-container-horizontal swiper-container-android">
                        <div className="news-itembox swiper-wrapper" >
                            <a className="news-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" href="http://news.163.com/18/0810/15/DORVGMJ5000189DG.html" target="_blank" data-swiper-slide-index="0" >
                                <div className="news-item-tit">香港特区政府财政司司长陈茂波莅临WeLab</div>
                                <div className="news-item-text">WeLab（我来贷）非常荣幸向司长介绍了公司的成长经历及金融科技应用情况，并分享其对虚拟银行及大湾区未来发展的期望。</div>
                                <img className="news-item-logo" src="https://m.wolaidai.com/msite/assets/img/news_06.jpg"/>
                            </a>
                            
                        </div>
                    </div>
            </div>
        </div>

        <div className="section section5">
            <h2 className="sec_tit">合作伙伴</h2>
            <div className="sec_text">携手共创&nbsp;&nbsp;&nbsp;&nbsp;普惠金融</div>
            <div className="img">

            </div>
            <br/>
            <div className="more_btn"><span className="text">查看更多</span><span className="more_btn_icon"></span></div>
        </div>

        <div className="footer">
    <div className="top-box">
        <div className="left">
            <div className="h">客服热线：<a href="tel://10100518" className="tel">10100518</a></div>
            <div className="p">（工作日 9:00 - 20:30 在线，周末法定节假日值班时间请参考语音提示)</div>

            <div className="h">微信客服：关注微信后点击“在线客服”</div>
            <div className="p">（工作日 9:00 - 20:30 在线)</div>

            <div className="h">邮箱：10100518@wolaidai.com</div>

        </div>
        <div className="right">
                    <img src="data:image/jpeg;base64,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" alt="" className="ewm" />
                    <div className="ewm_tit">关注微信可直接申请</div>
                </div>
            </div>
            <div className="btn" >我来贷APP下载</div>
            <div className="icp">深圳卫盈智信科技有限公司<br/>
                © 2018我来贷 www.wolaidai.com All rights reserved. <br/>
                <a href="http://www.miitbeian.gov.cn">ICP备案: 粤ICP备14052414号 ICP证 粤B2-20140339</a></div>
        </div>

        <div className="v2-register">
            <div className="v2-register-main">
                <div className="m-form-close"></div>
                <div className="v2-register-logo">
                    <img src="https://m.wolaidai.com/static/modules/app/images/v2/home/logo.png" />
                </div>
                <div className="m-form border-box">
                    <div className="m-form-row m-form-row-tel">
                        <input type="tel" className="m-radius0 m-square-input border-box" id="phone" name="phone" placeholder="请输入手机号码" maxLength="13" />
                        <span className="m-close hide" ></span>
                    </div>
                    <div className="m-form-row m-form-row-verif">
                        <input type="tel" className="m-radius0 m-square-input border-box " id="verifyCode" name="verifyCode" placeholder="请输入验证码" maxLength="6" />
                        <button className="btn-send-code" disabled="">获取验证码</button>
                    </div>

                    <div className="m-form-row m-form-row-msg">
                        <div id="error-msg" className="m-tip"></div>
                    </div>
                    <div className="btn-login">立即申请</div>
                    <div className="xieyi checked">
                        <span className="xieyi-btn">
                          <span className="check"></span>
                          <span>点击既表示同意</span>
                        </span>
                        <a href="https://web.wolaidai.com/webapp/yhd/registrationAgreement.html" className="cont" target="_blank">《注册与服务协议》</a>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="mask hide"></div>

      </div>
        );
    }
}


export default Msite;