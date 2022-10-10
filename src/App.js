import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import User from "./components/User";
import Search from "./components/Search";

import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res =
      await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

  searchUser = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };
  //GET SINGLE USER
  getUser = async (login) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  };
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    const { users, user, loading } = this.state;
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
                    searchUser={this.searchUser}
                    clearUser={this.clearUser}
                    showClear={this.state.users.length > 0 ? true : false}
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
              path="/user/:login/*"
              element={(props) => (
                <>
                
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
                </>
              )}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

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
