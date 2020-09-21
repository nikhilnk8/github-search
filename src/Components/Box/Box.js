import React from "react";
import "./Box.css";
import { ImLocation, ImGit } from "react-icons/im";

function Box({
  username,
  publicrepos,
  image,
  link,
  location,
  name,
  followers,
  following,
}) {
  return (
    <div className="box">
      <img
        src={image ? image : "logo512.png"}
        alt="logo512.png"
        className="box__img"
      ></img>
      {username ? (
        <div className="box__detailDiv">
          <p>{name ? name : username}</p>
          {location == null ? (
            ""
          ) : (
            <p>
              {location}
              <ImLocation />
            </p>
          )}

          <p>
            {publicrepos}
            <ImGit />
          </p>
          <p>
            Followers <span>{followers}</span>
          </p>
          <p>
            Following <span>{following}</span>
          </p>
          <h6 className="x">
            <a href={link}>go to github</a>
          </h6>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Box;
