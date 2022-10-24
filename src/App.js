/* import logo from './logo.svg'; */
import './App.css';
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
    </div>
  );
}

export default App;
