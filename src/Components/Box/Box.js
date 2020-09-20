import React from "react";
import "./Box.css";

function Box({ username, publicrepos, image, link }) {
  return (
    <div className="box">
      <img src={image} alt="logo512.png" className="box__img"></img>
      <div className="box__detailDiv">
        <p>Full name: {username}</p>
        <p>Location: {"kasbdkajs"}</p>
        <p>Public Repos:{publicrepos}</p>
        <p>Link:{link}</p>
      </div>
    </div>
  );
}

export default Box;
