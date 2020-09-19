import React, { Component } from "react";
import {
  chemistry,
  computers,
  coronavirus,
  hearHim,
  math,
  python,
  relatable,
  sarcastic,
  science,
  straightFromSource,
  TIL,
  useBrain,
  DiscoverSpaces,
} from "../assets";
import "./styles/homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="qla-homepage">
        <ul className="qla-left-sidebar">
          <li>
            <img src={straightFromSource} alt="Straight From the Source" />
            Straight From the Source
          </li>
          <li>
            <img src={hearHim} alt="Hear Him!" />
            Hear Him!
          </li>
          <li>
            <img src={sarcastic} alt="Sarcastic" />
            Sarcastic
          </li>
          <li>
            <img src={coronavirus} alt="Coronavirus" />
            Coronavirus
          </li>
          <li>
            <img src={computers} alt="Computer Science" />
            Computer Science Studies
          </li>
          <li>
            <img src={useBrain} alt="Use The Brain" />
            How To Use The Brain
          </li>
          <li>
            <img src={relatable} alt="Why So Relatable?" />
            Why So Relatable?
          </li>
          <li>
            <img src={TIL} alt="TIL" />
            TIL
          </li>
          <li>
            <img src={math} alt="Mathematics" />
            Mathematics and Physics
          </li>
          <li>
            <img src={python} alt="Python Learners" />
            Python Learners
          </li>
          <li>
            <img src={science} alt="Science" />
            Science
          </li>
          <li>
            <img src={chemistry} alt="Chemistry" />
            Bachelor of Science in Chemistry
          </li>
          <li>
            <DiscoverSpaces />
            Discover Spaces
          </li>
        </ul>
      </div>
    );
  }
}
