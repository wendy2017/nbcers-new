import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class About extends Component {
  componentDidMount() {}
  render() {
    let pathName = window.location.hash.split("#")[1];

    return (
      <div className="about">
        <h3>
          <Link className="-color-black" to={"/home"}>
            首页
          </Link>
          <span className="-color-light">&nbsp;/&nbsp;</span>
          <span className="-color-light">关于我们</span>
        </h3>
        <div className="con">
          {/* <div className="left">
            <div className="bg-about" />
          </div> */}
          <div className="right about-text-con">
            <p>
              宁波赛尔斯金属制品有限公司，创建至今已有20多年历史，是一家集研发、生产和销售为一体的专业铝压铸加工配套企业。
            </p>
            <br />
            <p>
              凭借先进的生产和检测设备，专业的生产、管理、品管团队，以及丰富雄厚的技术底蕴，公司通过了ISO9001，TS16949质量体系认证，并且稳步发展成为一家汽车发动机、医疗器械、机械、电机等行业的专业配套企业，成为上海柴油机、一汽解放锡柴、云内动力、中大电机、柯达等在内的众多厂商的优质供应商和长期合作伙伴。
            </p>
            <br />
            <p>
              公司倡导“真诚面对客户，坦诚相待员工，忠诚对待企业”三诚精神和“求真，务实，合作，共赢”的经营理念，长期致力于为合作伙伴提供优质、安全、环保的压铸配件，并且寄希望于通过强大的技术实力和先进的经营理念，推动国内实体制造业的发展。
            </p>
            <br />
            <p>公司使命：致力于为合作伙伴提供优质、安全、环保的压铸配件。</p>
            <br />
            <p>
              公司愿景：以强大的技术实力为依托，以先进的经营理念为驱动，推动中国实体制造业的发展。
            </p>
          </div>
          <div className="about-img-con">
            <div className="adward-con">
              <span className="about-img-item adward-mj"></span>
              <span className="about-img-item adward-zj"></span>
            </div>

            <span className="about-img-item about-auth"></span>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
