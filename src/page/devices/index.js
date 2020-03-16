import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
class Devices extends Component {
  componentDidMount() {}
  render() {
    let pathName = window.location.hash.split('#')[1];

    return (
      <div className="devices">
        <h3>
          <Link to={'/home'} className="-color-dark">
            首页
          </Link>
          <span className="-color-light"> &nbsp;/&nbsp;</span>
          <span className="-color-light">核心设备</span>
          <span className="-color-light"> &nbsp;/&nbsp;</span>

          {pathName === '/devices/jia' && <span className="-color-light">加工设备</span>}
          {pathName === '/devices/zhuan' && <span className="-color-light">钻攻中心</span>}
          {pathName === '/devices/ya' && <span className="-color-light">压铸机</span>}
        </h3>
        {pathName === '/devices/jia' && (
          <div className="jia">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-jiagong" />
                <p>嘉泰加工中心-JT-VL850</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-shukong" />
                <p>万宝数控车床-X400</p>
              </div>
            </div>
          </div>
        )}
        {pathName == '/devices/zhuan' && (
          <div className="zhuan">
            <div className="mobile-zhuan-row">
              <div className="cha-col">
                <div className="box">
                  <span className="bg bg-zhuan3" />
                  <p>盈拓钻攻中心-MC500</p>
                </div>
              </div>
              <div className="cha-col">
                <div className="box">
                  <span className="bg bg-zhuan1" />
                  <p>蕙勒钻攻中心-DT1000A</p>
                </div>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-zhuan2" />
                <p>威亚钻攻中心-380Ti</p>
              </div>
            </div>
          </div>
        )}
        {pathName == '/devices/ya' && (
          <div className="ya">
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-ya1" />
                <p>伊之密-DM180</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-ya2" />
                <p>伊之密-DM300</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-ya3" />
                <p>伊之密-DM500</p>
              </div>
            </div>
            <div className="cha-col">
              <div className="box">
                <span className="bg bg-ya4" />
                <p>伊之密-DM800</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Devices;
