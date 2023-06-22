import React, { Component } from "react";
import Button from "../Button";
import "./Home.css";
import home from "..//..//assets/images/home.png";
import tel from "..//..//assets/images/tel.svg";

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="home-left">
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="button">
                <Button />
                <img src={tel} alt="tel" />
                <div className="tel">
                
                  <span>Call us now</span>
                  <p>(414) 567 - 2109</p>
                </div>
              </div>
            </div>
            <div className="home-right">
              <img src={home} alt="home" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
