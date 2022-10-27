import './App.css';
import {BsGithub} from 'react-icons/bs';
import PFNavbar from './components/PFNavbar'
import PFAbout from './components/PFAbout'
import PFSkills from './components/PFSkills'
import PFProjects from './components/PFProjects'
import PFContact from './components/PFContact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <aside className="App-navbar">
          <PFNavbar
            logo={"<misotideas />"}
            items={[
              {About: '#About'},
              {Skills: '#Skills'},
              {Projects: '#Projects'},
              {Contact: '#Contact'}
              ]}/>
        </aside>
        <div className="After-aside">
          <PFAbout />
          <PFSkills />
          <PFProjects />
          <PFContact />
        </div>
      </header>
      <footer className="App-footer">
        <p>Repo of the portfolio:</p>
        <a href="https://github.com/eams1798/portfolio" target="_blank" rel="noreferrer">
            <BsGithub id="link-repo-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
