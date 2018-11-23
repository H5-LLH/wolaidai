import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import qs from 'qs'

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import home from './pages/Home/Home.jsx';
//引入热门推荐组件
import financialLife from './pages/FinancialLife/FinancialLife.jsx';
//引入大额简单贷组件
import xsell from './pages/Xsell/Xsell.jsx';
//引入车险消费分期
import insurance from './pages/Insurance/Insurance.jsx';
//引入申请大额贷款
import apply from './pages/Apply/Apply.jsx';

//引入ant的css样式
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';


//创建store仓库
const store = createStore(function(state = {
  count: 0,
  ggtext:"嘻嘻"
}, action) {
  const count = state.count
  switch (action.type) {
	//使用示例
    case 'multi':
      return Object.assign({}, state, {name: action.name});
    case 'DDtext':
      return {
        ...state,
        ggtext: action.ggtext
      };
    default:
      return state
  }
});



React.axios = axios; //react中全局引入插件的方式
React.qs = qs;
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={home} />
				<Route path="/financialLife" component={financialLife} />
        <Route path="/insurance" component={insurance} />
			  <Route path="/xsell" component={xsell} />
				<Route path="/apply" component={apply} />
			</div>
		</Router >
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
