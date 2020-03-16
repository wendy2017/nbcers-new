import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
class Home extends Component {
  state = {
    currentIndex: 1,
  };
  current = 1;
  myInter;
  componentDidMount() {
    this.interval();
  }
  interval() {
    let temp = this.state.currentIndex;

    this.myInter = setInterval(() => {
      temp++;
      if (temp > 3) {
        temp = 1;
        this.setState({
          currentIndex: 1,
        });
      } else {
        this.setState({
          currentIndex: temp,
        });
      }
    }, 5000);
  }
  setCurrent(index, e) {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    this.myInter && clearInterval(this.myInter);
    this.setState({
      currentIndex: index,
    });
    this.interval();
    return false;
  }
  handleTouchStart(index, e) {
    this.myInter && clearInterval(this.myInter);
    this.startX = e.touches[0].clientX;
  }
  handleTouchMove(index, e) {
    this.myInter && clearInterval(this.myInter);
    this.endX = e.touches[0].clientX;
  }
  handleTouchEnd(index) {
    this.myInter && clearInterval(this.myInter);
    let distance = Math.abs(this.startX - this.endX);
    let temp = this.state.currentIndex;
    if (distance > 50) {
      if (this.startX > this.endX) {
        if (temp > 2) {
          this.setState({
            currentIndex: 1,
          });
        } else {
          this.setState({
            currentIndex: temp + 1,
          });
        }
      } else {
        if (temp < 2) {
          this.setState({
            currentIndex: 3,
          });
        } else {
          this.setState({
            currentIndex: temp - 1,
          });
        }
      }

      this.interval();
    }
  }
  next() {
    this.myInter && clearInterval(this.myInter);
    let temp = this.state.currentIndex;
    temp++;
    if (temp > 3) {
      temp = 1;
    }
    this.setState({
      currentIndex: temp,
    });
  }
  prev() {
    this.myInter && clearInterval(this.myInter);
    let temp = this.state.currentIndex;
    temp++;
    if (temp > 3) {
      temp = 1;
    }
    this.setState({
      currentIndex: temp,
    });
  }
  render() {
    return (
      <div className="home">
        <div className="first">
          {this.state.currentIndex === 1 && (
            <Link
              to="about"
              className="img-con img-con-1"
              onTouchStart={this.handleTouchStart.bind(this, 1)}
              onTouchMove={this.handleTouchMove.bind(this, 1)}
              onTouchEnd={this.handleTouchEnd.bind(this, 1)}
            >
              {/* <span className="left" onClick={this.prev.bind(this)}>
                &lt;
              </span> */}
              <div className="text-con">
                {window.innerWidth < 800 ? (
                  <p className="img-title">宁波赛尔斯</p>
                ) : (
                  <p className="img-title">宁波赛尔斯金属制品有限公司</p>
                )}

                <p className="img-title-1">
                  <span className="mobile-next">
                    <span className="mobile-next-1">求真 务实 创新 </span>
                    <span className="mobile-next-2">诚信 合作 共赢</span>
                  </span>
                </p>
                <a className="img-title-2" href="#/about">
                  了解更多
                </a>
              </div>
              {/* <span onClick={this.next.bind(this)} className="right">
                &gt;
              </span> */}
              <div className="dot-con">
                <span className="first-dot dot-active" onClick={this.setCurrent.bind(this, 1)} />
                <span className="sec-dot" onClick={this.setCurrent.bind(this, 2)} />
                <span className="third-dot" onClick={this.setCurrent.bind(this, 3)} />
              </div>
            </Link>
          )}
          {this.state.currentIndex === 2 && (
            <Link
              to="products/qi"
              className="img-con img-con-2"
              onTouchStart={this.handleTouchStart.bind(this, 2)}
              onTouchMove={this.handleTouchMove.bind(this, 2)}
              onTouchEnd={this.handleTouchEnd.bind(this, 2)}
            >
              {/* <span className="left" onClick={this.prev.bind(this)}>
                &lt;
              </span> */}
              <div className="text-con">
                <p className="img-title">金属制品行业专家</p>
                <a className="img-title-3" href="#/products/qi">
                  了解更多
                </a>
              </div>
              {/* <span onClick={this.next.bind(this)} className="right">
                &gt;
              </span> */}
              <div className="dot-con">
                <span className="first-dot" onClick={this.setCurrent.bind(this, 1)} />
                <span className="sec-dot dot-active" onClick={this.setCurrent.bind(this, 2)} />
                <span className="third-dot" onClick={this.setCurrent.bind(this, 3)} />
              </div>
            </Link>
          )}
          {this.state.currentIndex === 3 && (
            <Link
              to="devices/jia"
              className="img-con img-con-3"
              onTouchStart={this.handleTouchStart.bind(this, 3)}
              onTouchMove={this.handleTouchMove.bind(this, 3)}
              onTouchEnd={this.handleTouchEnd.bind(this, 3)}
            >
              {/* <span className="left" onClick={this.prev.bind(this)}>
                &lt;
              </span> */}
              <div className="text-con">
                <p className="img-title img-color-dark">领先的设计与加工能力</p>
                <a className="img-title-3" href="#/devices/jia">
                  了解更多
                </a>
              </div>
              {/* <span onClick={this.next.bind(this)} className="right">
                &gt;
              </span> */}
              <div className="dot-con">
                <span className="first-dot" onClick={this.setCurrent.bind(this, 1)} />
                <span className="sec-dot" onClick={this.setCurrent.bind(this, 2)} />
                <span className="third-dot dot-active" onClick={this.setCurrent.bind(this, 3)} />
              </div>
            </Link>
          )}
        </div>
        <div className="mtb50 product">
          <div className="header">
            <div className="text">产品精选</div>
          </div>
          <div className="res-row">
            <div className="-col" span="8">
              <div className="box">
                <a href="#/products/qi">
                  <span className="bg-product-qi bg-product" />
                  <p>汽配产品</p>
                </a>
              </div>
            </div>
            <div className="-col" span="8">
              <div className="box">
                <a href="#/products/cha">
                  <span className="bg-product-cha bg-product" />
                  <p>差速器产品</p>
                </a>
              </div>
            </div>
            <div className="-col" span="8">
              <div className="box">
                <a href="#/products/dian">
                  <span className="bg-product-dian bg-product" />
                  <p>电机产品</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mtb50 device">
          <div className="header">
            <div className="text">核心设备</div>
          </div>
          <div className="res-row">
            <div className="-col">
              <div className="box">
                <a href="#/devices/jia">
                  <span className="bg-device-jia bg-device" />
                  <p>加工设备</p>
                </a>
              </div>
            </div>
            <div className="-col">
              <div className="box">
                <a href="#/devices/zhuan">
                  <span className="bg-device-zhuan bg-device" />
                  <p>钻攻中心</p>
                </a>
              </div>
            </div>
            <div className="-col">
              <div className="box">
                <a href="#/devices/ya">
                  <span className="bg-device-ya bg-device" />
                  <p>压铸机</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mtb50 client">
          <div className="header">
            <div className="text">我们的客户</div>
          </div>
          <div className="-row">
            <div className="-col">
              <span className="bg-client-1 bg-client" />
            </div>
            <div className="-col">
              <span className="bg-client-2 bg-client" />
            </div>
            <div className="-col">
              <span className="bg-client-3 bg-client" />
            </div>
            <div className="-col">
              <span className="bg-client-4 bg-client" />
            </div>
            <div className="-col">
              <span className="bg-client-5 bg-client" />
            </div>
            <div className="-col">
              <span className="bg-client-6 bg-client" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
