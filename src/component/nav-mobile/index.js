import './index.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMobile extends Component {
  componentDidMount() {}
  state = {
    show: false,
  };
  show = false;
  close(e) {
    this.show = !this.show;
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    let pathName = window.location.hash.split('#')[1];

    return (
      <div className="mobile_bar">
        <Link to={'/home'} className="mobile_title">
          宁波赛尔斯
        </Link>
        <div className="btn_more" onClick={this.close.bind(this)}>
          <div className="divider" />
          <div className="divider" />
          <div className="divider" />
        </div>
        <div className="mobile_menu" style={{ display: this.state.show ? 'block' : 'none' }}>
          {this.props.list.map(item => {
            return item.children ? (
              <div>
                <a style={{ borderBottom: 'none', textAlign: 'left' }}>
                  <span>{item.text}</span>
                </a>
                {item.children && (
                  <div className="mobile_subMenu">
                    {item.children.map(child => {
                      return (
                        <Link to={child.url} onClick={this.close.bind(this)}>
                          <span>{child.text}</span>
                          <span>></span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Link to={item.url} onClick={this.close.bind(this)}>
                  <span>{item.text}</span>
                  <span>></span>
                </Link>
                {item.children && (
                  <div className="mobile_subMenu">
                    {item.children.map(child => {
                      return (
                        <Link to={child.url} onClick={this.close.bind(this)}>
                          <span>{child.text}</span>
                          <span>></span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default NavMobile;
