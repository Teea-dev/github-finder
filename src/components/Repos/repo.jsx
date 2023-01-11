import React from 'react';
import RepoItem from './Repoitem'
function Repo({repo}) {
    return repo.map(repo =>{
        <RepoItem repo={repo} key={repo.id}/>
    });
}

export default Repo;