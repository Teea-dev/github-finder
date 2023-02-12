import React, { useState } from "react";
import { useContext } from "react";
import AlertContext from "./context/Alert/AlertContext";
import GithubContext from "./context/Github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("please enter something", "light");
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUser}
        >
          {" "}
          Clear{" "}
        </button>
      )}
    </>
  );
};

export default Search;
