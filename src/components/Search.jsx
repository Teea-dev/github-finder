import { Component } from "react";
import React from "react";

export class  Search extends Component  {
 state ={
  text: ''
 }


  
  onSubmit = (e) =>{
  e.preventDefault();
 this.props.searchUser(this.state.text); 
 this.setState({text:''})
  }
   onChange = (e) => {
    this.setState( {[e.target.name]: e.target.value})
  };
  render (){


    return (
    <>
        <form className="form" onSubmit={this.onSubmit} > 

      <input
        type="text"
        name="text"
        placeholder="search ...."
        value={this.state.text}
        onChange={this.onChange}
        />
      <input type="submit" value="search"  className="btn btn-dark btn-block"/>
        </form>
       {this.props.showClear && (
        <button className="btn btn-light btn-block" onClick={this.props.clearUser}> Clear </button>

       )}
    </>
  );
}
};

export default Search;

// import React, {useState} from "react";

// const Search =() =>  {
 
//   const [text, setText] = useState('');


  
//   onSubmit = (e, props) =>{
//   e.preventDefault();
//  props.searchUser(this.state.text); 
//  this.setState({text:''})
//   }
//    onChange = (e) => {
//     this.setState( {[e.target.name]: e.target.value})
//   };
//   render (){


//     return (
//     <>
//         <form className="form" onSubmit={this.onSubmit} > 

//       <input
//         type="text"
//         name="text"
//         placeholder="search ...."
//         value={this.state.text}
//         onChange={this.onChange}
//         />
//       <input type="submit" value="search"  className="btn btn-dark btn-block"/>
//         </form>
//        {this.props.showClear && (
//         <button className="btn btn-light btn-block" onClick={this.props.clearUser}> Clear </button>

//        )}
//     </>
//   );
// }
// };

// export default Search;
