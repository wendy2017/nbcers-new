import React, { Component } from 'react';
import Nav from './component/nav';
import NavMobile from './component/nav-mobile';
import Welcome from './page/welcome';
import Home from './page/home';
import Product from './page/products';
import Device from './page/devices';
import About from './page/about';
import Concat from './page/concat';
import Footer from './component/footer';
import './App.css';
import { Route, Link } from 'react-router-dom';

const LIST = [
  {
    text: '首页',
    url: '/home',
  },
  {
    text: '产品展示',
    url: '/products',
    children: [
      {
        text: '汽配产品',
        url: '/products/qi',
      },
      {
        text: '差速器产品',
        url: '/products/cha',
      },
      {
        text: '电机产品',
        url: '/products/dian',
      },
      {
        text: '其他产品',
        url: '/products/other',
      },
    ],
  },
  {
    text: '核心设备',
    url: '/devices',
    children: [
      {
        text: '加工设备',
        url: '/devices/jia',
      },
      {
        text: '钻攻中心',
        url: '/devices/zhuan',
      },
      {
        text: '压铸机',
        url: '/devices/ya',
      },
    ],
  },
  {
    text: '关于我们',
    url: '/about',
  },
  {
    text: '联系我们',
    url: '/contact',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav_bar">
          {window.innerWidth >= 790 && (
            <Link to={'/home'} className="title">
              宁波赛尔斯
            </Link>
          )}
          {/* <Nav list={LIST} /> */}
          {(window.innerWidth < 790 && <NavMobile list={LIST} />) || <Nav list={LIST} />}
          <a className="btn-lang">中文</a>
        </div>
        <div className="conent">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products/qi" component={Product} />
          <Route exact path="/products/cha" component={Product} />
          <Route exact path="/products/dian" component={Product} />
          <Route exact path="/products/other" component={Product} />
          <Route exact path="/devices/jia" component={Device} />
          <Route exact path="/devices/zhuan" component={Device} />
          <Route exact path="/devices/ya" component={Device} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Concat} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
