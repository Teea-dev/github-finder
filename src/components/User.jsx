import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const User = (props) => {
  const params = useParams();
  useEffect(() => {
    props.getUser(params.login);
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
  } = props.user;
  console.log(name);
  const loading = props.user;
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
              <h3>Bio</h3>
              <p>Bio</p>
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
            <li>{blog && <>Website:{blog}</>}</li>
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
    </>
  );
};

export default User;
