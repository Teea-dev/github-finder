import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hierable,
    } = this.props.user;
    console.log(name);

    return <div>{name}</div>;
  }
}

export default User;
// import React, { useEffect } from "react";

// export const User = (props) => {
//   useEffect((props
//     ) => {
//     props.getUser(props.match.params.login);
//   }, []);

//   const {
//     name,
//     avatar_url,
//     location,
//     bio,
//     blog,
//     login,
//     html_url,
//     followers,
//     following,
//     public_repos,
//     public_gist,
//     hierable,
//   } = props.user;
// console.log(name);

//   return  (

//       <h1>{name}</h1>
//   )

// }

// export default User;
