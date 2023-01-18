import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "./Types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repo: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUser = async (text) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
   

    dispatch({
    type:  SEARCH_USERS,
    payload: res.data.items
    });
  };

  //SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repo,
        loading: state.loading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
