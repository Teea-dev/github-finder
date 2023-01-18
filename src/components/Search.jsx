import React, { useState } from "react";
import { useContext } from "react"
import githubContext from "./context/Github/githubContext";
const Search = ({ showClear, clearUser }) => {
  const githubContext = useContext(githubContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("please enter something", "light");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="search ...."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          {" "}
          Clear{" "}
        </button>
      )}
    </>
  );
};

export default Search;
