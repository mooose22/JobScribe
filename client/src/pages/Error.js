import React from "react";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div className="center-content">
        <img src={img} alt="not-found" className="responsive-image" />
        <h3>Ohh! Page not found</h3>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
