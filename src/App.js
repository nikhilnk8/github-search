import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box/Box";
import Search from "./Components/Search/Search";

function App() {
  const [username, setusername] = useState("");
  const [publicrepos, setpublicrepos] = useState("");
  const [link, setlink] = useState("");
  const [image, setimage] = useState("");
  async function get_user(username) {
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
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GITHUB SEARCH</h1>
        <Search get_user={get_user} />
        <Box
          username={username}
          image={image}
          link={link}
          publicrepos={publicrepos}
        />
      </header>
    </div>
  );
}

export default App;
