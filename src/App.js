import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import axios from 'axios';

class App extends React.Component {
state ={
 users:[],
 loading: false

}

  async componentDidMount(){
this.setState({loading:true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
  this.setState( {users:res.data, loading:false});
  }

   searchUser= async text =>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
  this.setState( {users:res.data.items, loading:false});

  }
  clearUser =()=>{
    this.setState({users:[], loading:false})
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Search searchUser={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length > 0 ? true: false} />
      
       <div className='container'>
        <Users  loading={this.state.loading} users={this.state.users} />
       </div>
      </div>
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