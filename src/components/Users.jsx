import React from "react";
import Userlist from "./Userlist";
import Spinner from "./Spinner";
import { useContext } from "react";
import GithubContext from "./context/Github/githubContext";

function Users() {
  const githubContext = useContext(GithubContext);


  const {loading , users} = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div style={userStyle}>
          {users.map((user) => {
            return <Userlist key={user.id} user={user} />;
          })}
        </div>
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeate(3,1fr)",
  gridGap: "1rem",
};
export default Users;
