import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
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
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  // GET SINGLE USER
  const getUser = async (login) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    
  };


  // GET REPO

  const userRepo = async (login) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/users?${login}/repos?per_pages=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({
      type:GET_REPOS,
      payload:res.data,
    })
  };
  //Clear Users
  const clearUser = () =>
    dispatch({
      type: CLEAR_USERS,
    });
  //SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repo,
        loading: state.loading,
        searchUser,
        clearUser,
        getUser,
        userRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
