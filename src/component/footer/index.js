import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-main">
    Copyright ©️ 2019 nbceres
    {/* <span className="footer-name"> 浙ICP备17038603号</span> */}
    <a className="footer-name" href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备17038603号</a>
  </div>
);

export default Footer;
