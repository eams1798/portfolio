import { useState } from 'react';
import './styles/PinnedRepo.css';
import { useTranslation } from 'react-i18next';
import { Repo } from '../interfaces/repo';

const PinnedRepo = ({repo}: {repo: Repo}) => {
  const [repoStatus, setRepoStatus] = useState('');
  const [tP, ] = useTranslation("Projects");
  const closeRepo = () => {
    setRepoStatus('closed');
    setTimeout(() => {
      setRepoStatus('');
    }, 500);
  };

  return (
    <>
      <div
        className="pinned-repo"
        id={`repo-${repo.repo}`}
        onClick={() =>{
          setRepoStatus('opened');
        }} >
        <div className="pinned-repo-title">
          <h4 className="text-color2">{repo.repo}</h4>
        </div>
      </div>
      <div
        className={`darkscreenrepo ${repoStatus}`.trim()}
        onClick={closeRepo} />
      <div className={`pinned-repo-info ${repoStatus}`.trim()} >
        <div className={`pinned-repo ${repoStatus}`} id={`repo-${repo.repo}`} />
        <div className="repo-data">
          <h2 className="text-color2">{repo.repo}</h2>
          <p className="text-color2"><strong>{tP("description")}</strong> {repo.description ? repo.description : 'None'}</p>
          <p className="text-color2"><strong>{tP("link")}</strong> <a
              href={repo.link ? repo.link : '#'}
              target="_blank" rel="noreferrer">{repo.link ? repo.link : 'None'}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default PinnedRepo;
