import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <h2 id="f-pf">Ph.</h2>
        <div className="proj">
          <h2>
            Projectshut is an open source web app that enables users to freely
            publish their projects and create user profiles within the platform.
          </h2>
        </div>
      </div>
      <div className="doc">
        <h2>Documentation</h2>
        <p>Contributing Guide</p>
        <p>Add projects via Github</p>
        <p>Run the project locally</p>
      </div>
      <div className="license">
        <h2>License</h2>
        <p>Mit License</p>
        <p>Code of Conduct</p>
      </div>

      <div className="end">
        <p> &copy;Projectshut All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
