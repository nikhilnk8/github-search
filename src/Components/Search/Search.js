import React, { useState } from "react";
import "./Search.css";
import { ImSearch } from "react-icons/im";

function Search({ get_user }) {
  const [username, setUsername] = useState("");
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Enter a username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => get_user(username)}>
        <ImSearch size={20} />
      </button>
    </div>
  );
}

export default Search;
