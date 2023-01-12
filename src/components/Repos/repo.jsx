import React from "react";
import RepoItem from "./Repoitem";


function Repo({ repo }) {
  return (
    <div>
      {Array.isArray(repo)
        ? repo.map((repo) => {
            <RepoItem repo={repo} key={repo.id} />;
          })
        : null}
    </div>
  );
}

export default Repo;
