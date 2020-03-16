import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Concat extends Component {
  // componentDidMount() {
  //   var BMap = window.BMap;
  //   var map = new BMap.Map('allmap'); // 创建Map实例
  //   var top_right_navigation = new BMap.NavigationControl({
  //     anchor: window.BMAP_ANCHOR_TOP_RIGHT,
  //     type: window.BMAP_NAVIGATION_CONTROL_SMALL,
  //   });
  //   var marker = new BMap.Marker(new BMap.Point(121.1740943449, 30.2180765781));
  //   map.centerAndZoom(new BMap.Point(121.1740943449, 30.2180765781), 14); // 初始化地图,设    置中心点坐标和地图级别
  //   // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
  //   map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  //   map.addControl(top_right_navigation);
  //   map.addOverlay(marker);
  // }
  render() {
    return (
      <div className="concat">
        <h3>
          <Link className="-color-black" to={'/home'}>
            首页
          </Link>
          <span className="-color-light">&nbsp;/&nbsp;</span>
          <span className="-color-light">联系我们</span>
        </h3>
        <div className="bg-concat" />
        <div className="concat-con">
          <div className="concat-text">
            <h3>您可以通过以下方式跟我们取得联系</h3>
            <p>邮箱：sales@nbceres.com</p>
            <p>电话：0574-63402281 </p>
            <p>传真：0574-63400447 </p>
            <p>手机：13306648883 / 13567941520 </p>
            <p>地址：浙江省慈溪市长河镇贤江村俞家路8号 </p>
            <p>微信公众号：nbceres </p>
          </div>
          <div className="sec">
            {/* <div className="map" id="allmap" /> */}
            <span className="-img-map" />
          </div>
        </div>
      </div>
    );
  }
}
export default Concat;
