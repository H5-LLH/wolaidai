import React, {
	Component
} from 'react';
import './Glogin.css'

import { Link } from "react-router-dom";
class Glogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneNum:"",
			yanzhengNum:"",
			jinyong:false,
			loginStatus:true
		};
	}

	phoneNumber(e){
		this.setState({
			phoneNum:e.target.value
		});
		setTimeout(()=>{
			console.log(this.state.phoneNum)
		},10)
		
	};
	
	suijiNum(){
		let str = "";
		for(let i=1;i<=6;i++){
			let sjNum = parseInt(Math.random()*9);
			str = str + sjNum
		}
		console.log(str)
		this.setState({
			yanzhengNum:str
		})
	}
	//验证，验证码是否正确
	yanzheng(e){
		if(e.target.value === this.state.yanzhengNum){
			this.setState({
				jinyong:true
			})
		}else{
			this.setState({
				jinyong:false
			})
		}
	}
	
	loginClick(){
		this.setState({
			loginStatus:false
		})
	}
	
	render() {
		return(
			<div>
			<div className="login_wrap" style={{display:(this.state.loginStatus? "block":"none")}}>
				<div className="logo">
					<img src="https://mf.wolaidai.com/aif-lease/file/9a91c0f0d15f6b2d03543209d862ad4c.png" alt="logo" />
					<div className="title">淘新机</div>
				</div>
				<div className="formInputGroup tm20">
					<img className="mobile" src="https://mf.wolaidai.com/aif-lease//file/e92a17b13f84bec39ecbdf43834f6b98.png" alt="..." />
					<div className="input-box">
						<div className="inputGroup-wrap" style={{borderBottom:"none"}}>
							<input  placeholder="请输入您的手机号" className="input-wrap" onChange={this.phoneNumber.bind(this)}/>
						</div>
					</div>
				</div>
				<div className="formInputGroup">
							<img className="sms" src="https://mf.wolaidai.com/aif-lease//file/762f8ebfdcd8d0834400ac6e8f44ebfc.png" alt="..." />
							<div className="input-box">
								<div className="inputGroup-wrap" style={{borderBottom: 'none', width:' 2rem'}}>
								<input placeholder="请输入验证码" className="input-wrap" onChange={this.yanzheng.bind(this)}/></div>
							</div>
							<div className="countdown">
								<div role="presentation" className="active" onClick={this.suijiNum.bind(this)}>获取验证码</div>
							</div>
				</div>
					<div style={{position:"relative"}}>
					<div  role="presentation" className={this.state.jinyong ? "btn-login":"btn-login jinyong"} onClick={this.loginClick.bind(this)}>登录</div>
					{
						(()=>{
							if(this.state.jinyong){
								return 
							}
							else{
								return (<div className="btn-login" style={{position:"absolute",left:"0",top:"-37px",zIndex:"3",width:"65%",opacity:"0"}}>
					</div>)
							}
						})()
					}
					
					</div>
				<div className="loginAgreement">
							<div className="agreement"><input type="checkbox" />
								<div className="icheck"><i className="iconfont icon-tongyi"></i></div><label>我已阅读并同意 </label>
								<a href="javascript:void(0);">《注册用户服务合同》</a>
							</div>
				</div>
			</div>
			
			<div className="route-container" style={{display:(this.state.loginStatus? "none":"block")}}>
							<ul className="order-container">
								<li className="order-empty"><img src="https://mf.wolaidai.com/aif-lease//file/b16de5806a3c96a8d03633ed5048a2b3.png" alt="" />
									<div>亲，暂无订单信息哦~</div>
									<button>返回</button></li>
							</ul>
			</div>
			
		</div>
		)
	}
}
export default Glogin;