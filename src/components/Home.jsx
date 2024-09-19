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
      <div className="first ">
        <div className="text">
          {" "}
          <h1>Learn.</h1>
          <h1>Build.</h1>
          <h1>Share.</h1>
        </div>

        <div className="p">
          <p>
            ProectShut is a platfom where you can share your open source
            projects with the world
          </p>
        </div>
        <div className="btn">
          <button>Browse Projects</button>
        </div>
      </div>
      <div className="images-1">
        <div className="img-1">
          <img src={first} alt="" />
        </div>
        <div className="img-2">
          <img src={second} alt="" />
        </div>
      </div>
      <div className="images-2">
        <div className="img-3">
          <img src={third} alt="" />
        </div>
        <div className="img-4">
          <img src={fourth} alt="" />
        </div>
        <div className="img-5">
          <img src={fifth} alt="" />
        </div>
      </div>
      <div className="images-3">
        <div className="img-6">
          <img src={sixth} alt="" />
        </div>
        <div className="img-7">
          <img src={seventh} alt="" />
        </div>
      </div>
      <div className="bottom">
        <p>Why should you use this?</p>
        <p id="p2">Showcase Your projects</p>
      </div>
      <div className="git">
        <h2 id="h4">Add Github link</h2>
        <h4 id="h2">
          You can add your GitHub repository link to your profile.
        </h4>
      </div>

      <div className="open">
        <h2>Open source</h2>
        <h4>This project is open source and you can contribute to it</h4>
      </div>
      <div className="share">
        <h2>Share</h2>
        <h4>Share your profile with your friends and colleagues</h4>
      </div>
      <div className="free">
        <h2>Free to use</h2>
        <h4>This project is free to use and you dont have to pay anything</h4>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
