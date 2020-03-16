import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Nav = props => (
  <ul className="nav">
    {props.list.map((ele, idx) => {
      let temp = ele.children
        ? window.location.hash.split('/')[1]
        : window.location.hash.split('/')[1];

      return ele.children ? (
        <a key={idx}>
          <li
            style={{
              borderBottom: temp == ele.url.split('/')[1] ? '2px solid #666666' : 'none',
            }}
          >
            <span>{ele.text}</span>
            {ele.children && (
              <ul className="subMenu">
                {ele.children &&
                  ele.children.map((colItem, colIndex) => {
                    return (
                      <Link to={colItem.url} key={colIndex}>
                        <li>{colItem.text}</li>
                      </Link>
                    );
                  })}
              </ul>
            )}
          </li>
        </a>
      ) : (
        <Link to={ele.url} key={idx}>
          <li
            style={{
              borderBottom: temp == ele.url.split('/')[1] ? '2px solid #666666' : 'none',
            }}
          >
            <span>{ele.text}</span>
            {ele.children && (
              <ul className="subMenu">
                {ele.children &&
                  ele.children.map(colItem => {
                    return (
                      <Link to={colItem.url}>
                        <li>{colItem.text}</li>
                      </Link>
                    );
                  })}
              </ul>
            )}
          </li>
        </Link>
      );
    })}
  </ul>
);

export default Nav;
