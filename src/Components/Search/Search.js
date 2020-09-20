import React, { useState } from "react";
import "./Search.css";

function Search({ get_user }) {
  const [username, setUsername] = useState("");
  return (
    <div className="search">
      <input
        className="search__input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => get_user(username)}>Search</button>
    </div>
  );
}

export default Search;
