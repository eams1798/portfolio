import './styles/PFProjects.css';
import { useState, useEffect } from 'react';
import PinnedRepo from './PinnedRepo';
import { useTranslation } from 'react-i18next';

const PFProjects = () => {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState();
  const [tP, ] = useTranslation("Projects");

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
        <h1 className="text-color1">{tP("projects")}</h1>
        <div className="pinned-repos">
          {pinnedRepos.map( (repo, index) => (
            <PinnedRepo repo={repo} key={index} />
          ))}
        </div>
        </>
      ))
    }
    </div>
  );
}

export default PFProjects;
