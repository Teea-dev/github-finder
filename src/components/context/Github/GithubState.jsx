import React, { useReducer} from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from './githubReducer';
import{
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER
} from './Types'

const GithubState = props=>{
const initialState={
  users:[],
  user:{},
  repo:[],
  loading:false
};
}

const [state, dispatch] = useReducer
