import Axios from "axios";
import React, { useReducer, useState } from "react";
import "./App.css";
import Box from "./Components/Box/Box";
import Search from "./Components/Search/Search";
import ClipLoader from "react-spinners/GridLoader";
import { css } from "@emotion/core";
import { reducer } from "./reducers/userReducer";

function App() {
  const [loading, setLoading] = useState(false);

  const userState = {
    username: "",
    publicrepos: 0,
    link: "",
    image: "",
    location: "",
    name: "",
    followers: 0,
    following: 0,
  };

  // using reducer
  const [user, dispatch] = useReducer(reducer, userState);

  // fetching data here
  async function get_user(username) {
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
      const gotUser = {
        username: response.data.login,
        publicrepos: response.data.public_repos,
        link: response.data.html_url,
        image: response.data.avatar_url,
        location: response.data.location,
        name: response.data.name,
        followers: response.data.followers,
        following: response.data.following,
      };

      dispatch({ type: "CHANGE_USER", payload: gotUser });
      setLoading(false);
    } catch (error) {
      const gotUser = {
        username: "",
        publicrepos: "",
        link: "",
        image: "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png",
        location: "",
        name: "",
        followers: "",
        following: "",
      };
      dispatch({ type: "CHANGE_USER", payload: gotUser });
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
          <Box user={user} />
        )}
      </header>
    </div>
  );
}

export default App;
