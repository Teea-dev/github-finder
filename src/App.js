import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import User from "./components/User";
import Search from "./components/Search";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);

  // useEffect(()  =>{

  //   setLoading(true)

  //   const res =
  //     axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

  //   // this.setState({ users: res.data, loading: false });
  //   setUsers(res.data)
  //   setLoading(false)
  // } ,[])

  //THE SEARCH USER FUNCTION
  const searchUser = async (text) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  };

  //GET REPO DETAILS
  const userRepo = async (login) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/search/users?${login}/repos?per_pages=5&sort=created:asc/&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    setRepo(res.data);
    setLoading(false);
  };
  // FUNCTION FOR THE CLEAR BUTTON
  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };
  //GET SINGLE USER
  const getUser = async (login) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  };

  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  searchUser={searchUser}
                  clearUser={clearUser}
                  showClear={users.length > 0 ? true : false}
                />
                <div className="container">
                  <Users loading={loading} users={users} />
                </div>
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route
            exact
            path="/user/:login"
            element={
              <User
                getUser={getUser}
                user={user}
                getUserRepo={userRepo}
                repo={repo}
                loading={loading}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// how to make shaky animations wiith css
// input:invalid{
// animation: skhake .3s;
//}
//@ keyframes shake{
//  25%{transform: translateX(4px)}
//  50%{transform: translateX(-4px)}
//  75%{transform: translateX(4px)}
//}
// THE HTML
// <input type=text pattern="[a-z]" >
