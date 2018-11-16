import React, {
	Component
} from 'react';

import {connect} from 'react-redux';
class Xsearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow:true,
			nnn:"搜索"
		};
	}
	
	clickSearch(){
		this.refs.input.focus();
		this.props.clickDD();
		this.setState({
			isShow:!this.state.isShow,
			inputValue:""
		});
		
	}
	
	getValue(e){
		//console.log(e.target.value);
		this.setState({
			inputValue:e.target.value
		})
	}
	
	render() {
		return(
		
			<div className={this.state.isShow?'weui-search-bar' :'weui-search-bar weui-search-bar_focusing'} id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input onChange={this.getValue.bind(this)} ref="input" type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required=""/>
                    <a onClick={this.clickSearch.bind(this)} className="weui-icon-clear" id="searchClear"></a>
                </div>
                <label className="weui-search-bar__label" id="searchText" onClick={this.clickSearch.bind(this)}>
                    <i className="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a className="weui-search-bar__cancel-btn" id="searchCancel" onClick={this.clickSearch.bind(this)}>{this.props.ggtext}</a>
        </div>
		)
	}
}

export default connect(
	(state)=>{
		return state;
	},
	(dispatch)=>{
		return {
			//对象封装事件函数，触发改变
		clickDD:()=>{
			//输出返回一个对象。包含类型。以及要修改的值
			dispatch({
				type:"DDtext",
				ggtext:"陈柳"
			});
			
		}
		
		}
	}
) (Xsearch);