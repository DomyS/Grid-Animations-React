import React, { Component } from "react";
import "./styles.css";

class Grid extends Component {
  render() {
    return (
      <div>
        <div class="main">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <h1 class="projects">
            Projects and <br />
            freetime work
          </h1>
          <div class="menu">
            <div class="wrapper">
              <div class="box a">
                <a href="#">A</a>
              </div>
              <div class="box b">B</div>
              <div class="box c">C</div>
              <div class="box d">D</div>
              <div class="box e">E</div>
              <div class="box f">F</div>
              <div class="box d">D</div>
              <div class="box e">E</div>
              <div class="box f">F</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
