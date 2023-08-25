import logo from "../assets/images/logo.svg";
import React from "react";

const Logo = ({ style }) => {
  return <img src={logo} alt="jobscribe" className="logo" style={style} />;
};

export default Logo;
