import React, { Component } from "react";
import "./About.css";
import about_1 from "../../assets/images/about-1.svg";
import about_2 from "../../assets/images/about-2.svg";
import about_3 from "../../assets/images/about-3.png";
import Button from "../Button";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="about-top">
              <h1>About Us</h1>
              <p>
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nu.
              </p>
            </div>
            <div className="about-body">
              <div className="card">
                <img src={about_1} alt="about" />
                <h1>1. Schedule online</h1>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="card">
                <img src={about_2} alt="about" />
                <h1>2. Pay online easily</h1>
                <p className="extra">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="card">
                <img src={about_3} alt="about" />
                <h1>3. Get your house cleaned</h1>
                <p >
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <div className="about-footer">
              <Button/>
              <Button/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
