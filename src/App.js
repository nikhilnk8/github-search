import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box/Box";
import Search from "./Components/Search/Search";
import ClipLoader from "react-spinners/GridLoader";
import { css } from "@emotion/core";

function App() {
  const [username, setusername] = useState("");
  const [publicrepos, setpublicrepos] = useState("");
  const [link, setlink] = useState("");
  const [image, setimage] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [loading, setLoading] = useState(false);
  async function get_user(username) {
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
      setusername(
        response.data.name == null ? response.data.login : response.data.name
      );
      setpublicrepos(response.data.public_repos);
      setlink(response.data.html_url);
      setimage(response.data.avatar_url);
      setLocation(response.data.location);
      setName(response.data.name);
      setFollowers(response.data.followers);
      setFollowing(response.data.following);
      setLoading(false);
    } catch (error) {
      setusername("");
      setpublicrepos("");
      setlink("");
      setimage("https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png");
      setLocation("");
      setName("");
      setFollowers("");
      setFollowing("");
      setLoading(false);
    }
  }

  const override = css`
    margin: 210px auto;
    border-color: red;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <h1>GITHUB SEARCH</h1>
        <Search get_user={get_user} />
        {loading ? (
          <ClipLoader color="white" loading={loading} css={override} />
        ) : (
          <Box
            username={username}
            image={image}
            link={link}
            publicrepos={publicrepos}
            location={location}
            name={name}
            followers={followers}
            following={following}
          />
        )}
      </header>
    </div>
  );
}

export default App;
