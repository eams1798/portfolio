import './styles/PFSkills.css';
import {DiHtml5, DiCss3, DiMysql, DiJqueryLogo, DiReact} from 'react-icons/di';
import {SiJavascript, SiGnubash, SiFlask, SiNginx, SiLetsencrypt, SiTypescript} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import CIcon from '../other_icons/c.png';
import PyIcon from '../other_icons/python.png';
import HoverIcon from './HoverIcon';

const PFSkills = () => {
  return (
    <div id="Skills" className="Skills-container">
      <h1>Skills</h1>
      <p>I have knowledge at:</p>
      <div className="Skills-subcontainer">
        <h2>Languages:</h2>
          <ul className="skill-list">
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiHtml5
                  className="react-icon"
                  id="icon-html"
                  color="orange" />
              }
                HiddenComponent={<div className="speech-bubble">HTML</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiCss3
                  className="react-icon"
                  id="icon-css"
                  color="blue" />
              }
                HiddenComponent={<div className="speech-bubble">CSS</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <div className="react-icon">
                    <SiJavascript
                      id="icon-javascript"
                      color="yellow"/>
                  </div>
                }
                  HiddenComponent={<div className="speech-bubble">JavaScript</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <div className="react-icon">
                    <img
                      id="icon-clang"
                      src={CIcon}
                      alt="clang" />
                  </div>
                }
                  HiddenComponent={<div className="speech-bubble">C Programming language</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <div className="react-icon">
                    <img
                      id="icon-python"
                      src={PyIcon}
                      alt="python" />
                  </div>
                }
                  HiddenComponent={<div className="speech-bubble">Python</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <DiMysql
                    className="react-icon"
                    id="icon-mysql"
                    color="rgb(1, 97, 138)" />
                }
                  HiddenComponent={<div className="speech-bubble">MySQL</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <div className="react-icon">
                    <SiGnubash
                      id="icon-bash" />
                  </div>
                }
                  HiddenComponent={<div className="speech-bubble">Bash</div>} />
            </li>
          </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2>Frameworks and Libraries:</h2>
          <ul className="skill-list">
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                  <DiJqueryLogo
                    className="react-icon"
                    id="icon-jquery"
                    color='rgb(1, 97, 138)'/>
                }
                HiddenComponent={<div className="speech-bubble">JQuery (JavaScript)</div>} />
              </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiReact
                  className="react-icon"
                  id="icon-react"
                  color='rgb(0, 218, 249)'/>
              }
                HiddenComponent={<div className="speech-bubble">React (JavaScript)</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                  <div className="react-icon">
                    <SiFlask
                      id="icon-flask" />
                  </div>
                }
                HiddenComponent={<div className="speech-bubble">Flask (Python)</div>} />
            </li>
          </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2>Deploy:</h2>
        <ul className="skill-list">
          <li className="skill-item">
            <HoverIcon
              MainComponent={
              <div className="react-icon">
                <SiNginx
                  id="icon-nginx"
                  color='rgb(0, 150, 57)'/>
              </div>
            }
              HiddenComponent={<div className="speech-bubble">NGINX</div>} />
          </li>
          <li className="skill-item">
            <HoverIcon
              MainComponent={
              <div className="react-icon">
                <SiLetsencrypt
                  id="icon-letsencrypt"
                  color='rgb(17, 58, 114)'/>
              </div>
            }
              HiddenComponent={<div className="speech-bubble">Let's encrypt</div>} />
          </li>
        </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2>Other resources:</h2>
          <ul className="skill-list">
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <div className="react-icon">
                  <FaNodeJs
                    id="icon-node"
                    color='rgb(104, 159, 99)'/>
                </div>
              }
                HiddenComponent={<div className="speech-bubble">node.js</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <div className="react-icon">
                  <SiTypescript
                    id="icon-typescript"
                    color='rgb(49, 120, 198)'/>
                </div>
              }
                HiddenComponent={<div className="speech-bubble">Typescript</div>} />
            </li>
          </ul>
      </div>
    </div>
  );
}

export default PFSkills;
