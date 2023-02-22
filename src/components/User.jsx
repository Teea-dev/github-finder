import React from "react";
import { useEffect, useContext } from "react";
import Repo from "./repos/Repo";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import GithubContext from "./context/Github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);
  const {user,getUser,repo,getUserRepo} = githubContext;

  const params = useParams();
  useEffect(() => {
    getUser(params.login)
    // getUserRepo(params.login);
  console.log(user);
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gist,
    hierable,
  } = user;
  // const loading = user;
  return (
    <>
      <Link to="/" className="btn btn-light">
        Go back to search
      </Link>
      Hireable:
      {hierable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card-grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            style={{ width: "150px" }}
            className="round-img"
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <>
              <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Visit Github Profile
          </a>
          <ul>
            <li>{login && <>Username:{login}</>}</li>
            <li>
              {blog && (
                <>
                  Website:{" "}
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    My Blog
                  </a>{" "}
                </>
              )}
            </li>
            <li>{company && <>Company:{company}</>}</li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary"> Followers:{followers}</div>
        <div className="badge badge-success"> Following:{following}</div>
        <div className="badge badge-primary">Public Repos:{public_repos}</div>
        <div className="badge badge-primary">Public Gist:{public_gist}</div>
      </div>
      <Repo repo={Repo} />
    </>
  );
};

export default User;
