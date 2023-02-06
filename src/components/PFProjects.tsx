import './styles/PFProjects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCarousel from './ProjectCarousel';
import { dataProjects } from '../data/dataProjects';

const PFProjects = () => {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [status, setStatus] = useState<string>('loading');
  const [error, setError] = useState<unknown>();
  const [tP, ] = useTranslation("Projects");

  useEffect(() => {
    setStatus('loading');
    try {
      fetch('https://gh-pinned-repos.egoist.dev/?username=eams1798')
        .then((response) => response.json())
        .then((data) => setPinnedRepos(data))
        .then(() => setStatus('success'));
    } catch(err) {
      console.log("it was not possible to get the pinned repositories from github" , err);
      setError(err);
      setStatus('error');
    }
  }, []);

  return (
    <div id="Projects" className="Projects-container">
    {
      (status === 'error') ? (
        <>{error}</>
      ) : ((status === 'loading') ?
      (
        <h1>Loading...</h1>
      ) :
      (
        <>
        <h1 className="text-color1">{tP("projects")}</h1>
        <ProjectCarousel images={dataProjects} path={'./src/images/projects'} repos={pinnedRepos}/>
        </>
      ))
    }
    </div>
  );
}

export default PFProjects;
