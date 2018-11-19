import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class GDtabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: ""
		};
	}

	render() {
		return(
			<div>
				<div className="good-tab">
					<button className="good-tab-true">商品介绍</button>
					<button className="good-tab-false">规格参数</button>
					<button className="good-tab-false">服务说明</button>
					<div className="good-underline" style={{left: "16.1%"}}></div>
				</div>
				
				<div className="good-content">
							<div style={{display: "block"}}><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/76/ef/4358a6260fbefa3c7bd36a0679a20f95d72c/spu_detail_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=OtxzmmMVEPON%2BlDMLvuTNAfL/8E%3D" alt="" />
							<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/2e/f6/41e02ead47093bf5872f298dfbdf2c2c8817/spu_detail_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=DFncHnmdhUj3ZZthc0OqZrz1zVU%3D" alt="" />
							<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/28/78/088316ca411e247c98e82776f39d6453dd3f/spu_detail_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=wszEwvfr/zlhmdbQLFbtC%2BuMBTA%3D" alt="" />
							<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/bb/72/3e13e623a5e61c9486276c4fd3145958d3ea/spu_detail_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=xPtDErNrpJkuWetBEvCtjPb5IqU%3D" alt="" />
							<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/88/35/20e2deb60a86226600f6352ccd65655e4c30/spu_detail_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=HHV0TiWfaQp2JddKnTavnFfUC8U%3D" alt="" /></div>
							<div style={{display: "none"}}>
								<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/40/42/afa8eacd36cca49890b437ea526943456b31/spu_param_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=wQmxOkLePxzsydnyEYMIyZxVghE%3D" alt="" />
							</div>
							<div style={{display: "none"}}>
								<img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/dd/c4/688b4210c0f5b4d696c1eb3ea7c1abd02e7e/lease_explanation_original.jpeg?Expires=1542530231&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=glSNGdm6LjvsGt3gNw3OL1sGSnc%3D" alt="" />
							</div>
						</div>
				
			</div>
		)
	}
}
export default GDtabs;