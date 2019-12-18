import React, { Component } from "react";

export default class HeaderHeader extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              TODO App
            </a>
            {/*
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              
              <li>
                 <a href="/">Sass</a>
                
              </li>
              {" "}
              <li>
                 <a href="/">Components</a>
                {" "}
              </li>
              {" "}
              <li>
                 <a href="/">JavaScript</a>
                {" "}
              </li>
              
            </ul>
            */}
          </div>
        </nav>
      </div>
    );
  }
}
