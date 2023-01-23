import './App.css';
import { Suspense } from 'react';
import { BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import PFNavbar from './components/PFNavbar';
import PFAbout from './components/PFAbout';
import PFSkills from './components/PFSkills';
import PFProjects from './components/PFProjects';
import PFContact from './components/PFContact';


function SuspensedApp() {
  const [ tF, ] = useTranslation("Footer");

  return (
    <div className="App">
      <header className="App-header">
        <aside className="App-navbar">
          <PFNavbar
            logo={"<misotideas />"}
            items={[{
              title: 'About',
              link: '#About',
            }, {
              title: 'Skills',
              link: '#Skills',
            }, {
              title: 'Projects',
              link: '#Projects',
            }, {
              title: 'Contact',
              link: '#Contact',
            }]}/>
        </aside>
        <div className="After-aside">
          <PFAbout />
          <PFSkills />
          <PFProjects />
          <PFContact />
        </div>
      </header>
      <footer className="App-footer">
        <p className='text-color2'>{tF("repo-portfolio")}</p>
        <a href="https://github.com/eams1798/portfolio" target="_blank" rel="noreferrer">
            <BsGithub id="link-repo-icon" color="white" />
        </a>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="loading dependencies">
      <SuspensedApp />
    </Suspense>
  );
}

export default App;
