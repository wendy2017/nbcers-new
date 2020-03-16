import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
class Product extends Component {
  componentDidMount() {}
  render() {
    let pathName = window.location.hash.split('#')[1];

    return (
      <div className="products">
        <h3>
          <Link to={'/home'} className="-color-dark">
            首页
          </Link>
          <span className="-color-light"> &nbsp;/&nbsp;</span>
          <span className="-color-light">产品展示</span>
          <span className="-color-light"> &nbsp;/&nbsp;</span>
          {pathName === '/products/cha' && <span className="-color-light">差速器产品</span>}
          {pathName === '/products/qi' && <span className="-color-light">汽配产品</span>}
          {pathName === '/products/dian' && <span className="-color-light">电机产品</span>}
          {pathName === '/products/other' && <span className="-color-light">其他产品</span>}
        </h3>
        {pathName === '/products/cha' && (
          <div className="cha">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-xg" />
                <p>差速器箱盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-csqxt" />
                <p>差速器箱体</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-clbsx" />
                <p>齿轮变速箱</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jk1" />
                <p>机壳</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jk2" />
                <p>机壳</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jk3" />
                <p>机壳</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-wo" />
                <p>卧式差速器箱体</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jiqiren" />
                <p>机器人差速器</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lscsqxtxg" />
                {/* <p>立式差速器箱体箱盖</p> */}
                <p>差速器箱体箱盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lsxt1" />
                <p>立式差速器箱体</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lsxt2" />
                <p>立式差速器箱体</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lsgai" />
                <p>立式差速器箱盖</p>
              </div>
            </div>
          </div>
        )}
        {pathName == '/products/qi' && (
          <div className="qi">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-fadongji" />
                <p>发动机</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-fadongjizm" />
                <p>发动机正面</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-fadongjifm" />
                <p>发动机反面</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dizuo" />
                <p>底座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-fdjkt" />
                <p>发动机壳体</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqsk" />
                <p>机油冷却器水壳</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqgb1" />
                <p>机油冷却器盖板</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqgb2" />
                <p>机油冷却器盖板</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqgb3" />
                <p>机油冷却器盖板</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqz1" />
                <p>机油冷却器座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqz2" />
                <p>机油冷却器座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jylqqz3" />
                <p>机油冷却器座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lvqinggb" />
                <p>机油滤清器盖板</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lvqingz" />
                <p>机油滤清器座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-yundong" />
                <p>云动D25壳版</p>
              </div>
            </div>
          </div>
        )}
        {pathName == '/products/dian' && (
          <div className="dian">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai1" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai2" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai3" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai4" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai5" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijigai6" />
                <p>电机盖</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-dijike" />
                <p>电机外壳</p>
              </div>
            </div>
          </div>
        )}
        {pathName == '/products/other' && (
          <div className="other">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-chilunxiang" />
                <p>齿轮箱</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-zcz" />
                <p>支撑座</p>
              </div>
            </div>

            <div className="cha-col">
              <div className="box">
                <span className="bg bg-diantitaban" />
                <p>电梯踏板</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-fzjzcz" />
                <p>纺织机支撑座</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-lh" />
                <p>轮毂</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-pdl" />
                <p>皮带轮</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-qghs" />
                <p>气缸活塞</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-srp" />
                <p>散热片</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-srz" />
                <p>散热支架</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm1" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm2" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm3" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm4" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm5" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jm6" />
                <p>仪器精密部件</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-gxyqzj" />
                <p>光学仪器支架</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-sb" />
                <p>手柄（咖啡机）</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-chilunxiangyunlin" />
                <p>齿轮箱（园林工具）</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Product;
