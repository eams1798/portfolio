import './styles/PFProjects.css';
import { useState, useEffect } from 'react';
/* import pinnedRepoList from '../functions/pinnedRepoList'; */

const PFProjects = () => {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState();

  useEffect(() => {
    setStatus('loading');
    try {
      fetch('https://gh-pinned-repos.egoist.dev/?username=eams1798')
        .then((response) => response.json())
        .then((data) => setPinnedRepos(data))
        .then((setStatus('success')));
    } catch(err) {
      console.log("it was not possible to get the pinned repositories from github" , err)
        .then(setError(err))
        .then(setStatus('error'));
    }
  }, []);

  return (
    <div id="Projects" className="Projects-container">
    {
      (status === 'error') ? (
        <>{error.toString()}</>
      ) : ((status === 'loading') ?
      (
        <h1>Loading...</h1>
      ) :
      (
        <>
        <h1>My featured projects</h1>
        <div className="pinned-repos">
          {pinnedRepos.map( (repo, index) => (
            <div className="pinned-repo" key={index}>
              <h3>Name: {repo.repo}</h3>
              <p>Description: {repo.description}</p>
              <p>Link: {repo.link}</p>
          {/* <img src={repo.image}></img> */}
            </div>
          ))}
        </div>
        </>
      ))
    }
    </div>
  );
}

export default PFProjects;
