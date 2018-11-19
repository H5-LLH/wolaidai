import React, {
	Component
} from 'react';
//import './GDmain.css'

//import { Link } from "react-router-dom";
class GDsummary extends Component {
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
				<div className="good-summary">
					<div className="good-shop">
						<img src="https://mf.wolaidai.com/aif-lease//file/c942fe37ec1da9e4fa18d0e64e84fde9.png" alt="" />
						首页
					</div>
					<button className="good-bargain">找人帮砍-￥200</button>
					<button className="good-check double_11">立即拥有</button>
				</div>
				
				<div className="modal-container hidden">
						<div className="modal-content checklist-container"><button className="checklist-close">✕</button>
							<div className="checklist-overview">
							<img className="checklist-thumbnail" src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/44/ef/01ea6c57891fe608c0cb049c88d0b3527919/spu_primary_original.jpeg?Expires=1542530537&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=4vybO8U6yD/qvcUex%2BvC645UYe0%3D" alt="" />
								<div className="checklist-numbers"><span>￥269.00</span><span>库存98件</span>
									<div>已选:“租完即送”</div>
								</div>
						</div>
							<ul className="checklist-plist" style={{maxHeight: "617px"}}>
								<li className="checklist-pitem">颜色
									<div>
									<button className="checklist-option-false ">冰珀蓝</button>
									<button className="checklist-option-false ">波尔多红</button>
									</div>
								</li>
								<li className="checklist-pitem">内存
									<div>
									<button className="checklist-option-false ">256G</button>
									<button className="checklist-option-false ">128G</button>
									</div>
								</li>
								<li className="checklist-pitem">租期
									<div>
									<button className="checklist-option-false ">24个月租满即送</button>
									<button className="checklist-option-false ">18个月租满即送</button>
									</div>
								</li>
								<li className="checklist-pitem">租赁形式
									<div><button className="checklist-option-true ">租完即送</button></div>
								</li>
								<li className="checklist-pitem">增值服务
									<div className="checklist-safe">
									<img src="https://mf.wolaidai.com/aif-lease//file/e294924c007a325875ef143e64f21733.png" className="checklist-checked" alt="" />
									<span>意外保障（必选）</span>
									<span>￥299.00</span></div>
									<div className="checklist-note">因意外产生的碎屏等问题，可享受免费保修一次</div>
								</li>
							</ul>
							<div className="checklist-submit"><button>确定</button></div>
						</div>
					</div>
				
			</div>
		)
	}
}
export default GDsummary;