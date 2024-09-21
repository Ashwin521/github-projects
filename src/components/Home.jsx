import React from "react";
import "./Home.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";
import seventh from "../assets/seventh.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="text">
        <h1>Learn</h1>
        <h1>Build</h1>
        <h1>Share.</h1>
        <p>
          ProjectsHut is a platform where you can share your open source project
          woth the world
        </p>
      </div>
      <div className="image">
        <div className="img-col1">
          <img src={first} alt="" />
          <img src={second} alt="" />
        </div>
        <div className="img-col2">
          <img src={third} alt="" />
          <img src={fourth} alt="" />
          <img src={fifth} alt="" />
        </div>
        <div className="img-col3">
          <img src={sixth} alt="" />
          <img src={seventh} alt="" />
        </div>
      </div>
      <div className="mid">
        <div className="mid-text">
          <p id="p1">Why should you use this project</p>
          <p id="p2">Showcase your project</p>
        </div>
      </div>
      <div className="ex-info">
        <div className="info-1">
          <p id="g1">Add Github link</p>
          <p id="g2">You can add your Github repository link to your profile</p>
        </div>
        <div className="info-2">
          <p id="o1">Open source</p>
          <p id="o2">This project is open source and you can contribute to it</p>
        </div>
        <div className="info-3">
          <p id="s1">Share your profile</p>
          <p id="s2">Share your profile with your friends and colleagues</p>
        </div>
        <div className="info-4">
          <p id="f1">Free to use</p>
          <p id="f2">This project is free to use and you dont have to pay anythig</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
