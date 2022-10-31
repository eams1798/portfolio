import './styles/PFSkills.css';
import {DiHtml5, DiCss3, DiMysql, DiJqueryLogo, DiReact} from 'react-icons/di';
import {SiJavascript, SiGnubash, SiFlask, SiNginx, SiLetsencrypt, SiTypescript} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import CIcon from '../other_icons/c.png';
import PyIcon from '../other_icons/python.png';
import HoverIcon from './HoverIcon';
import { useTranslation } from 'react-i18next';

const PFSkills = () => {
  const [ tS, ] = useTranslation("Skills");
  return (
    <div id="Skills" className="Skills-container">
      <h1 className="text-color2">{tS("skills")}</h1>
      <p className="text-color2">{tS("i-know")}</p>
      <div className="Skills-subcontainer">
        <h2 className="text-color2">{tS("langs")}</h2>
          <ul className="skill-list">
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiHtml5
                  className="react-icon"
                  id="icon-html"
                  color="orange" />
              }
                HiddenComponent={<div className="speech-bubble text-color2">HTML</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiCss3
                  className="react-icon"
                  id="icon-css"
                  color="blue" />
              }
                HiddenComponent={<div className="speech-bubble text-color2">CSS</div>} />
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
                  HiddenComponent={<div className="speech-bubble text-color2">JavaScript</div>} />
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
                  HiddenComponent={<div className="speech-bubble text-color2">{tS("c")}</div>} />
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
                  HiddenComponent={<div className="speech-bubble text-color2">Python</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <DiMysql
                    className="react-icon"
                    id="icon-mysql"
                    color="rgb(1, 97, 138)" />
                }
                  HiddenComponent={<div className="speech-bubble text-color2">MySQL</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                  MainComponent={
                  <div className="react-icon">
                    <SiGnubash
                      id="icon-bash" />
                  </div>
                }
                  HiddenComponent={<div className="speech-bubble text-color2">Bash</div>} />
            </li>
          </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2 className="text-color2">{tS("framelib")}</h2>
          <ul className="skill-list">
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                  <DiJqueryLogo
                    className="react-icon"
                    id="icon-jquery"
                    color='rgb(1, 97, 138)'/>
                }
                HiddenComponent={<div className="speech-bubble text-color2">JQuery (JavaScript)</div>} />
              </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                <DiReact
                  className="react-icon"
                  id="icon-react"
                  color='rgb(0, 218, 249)'/>
              }
                HiddenComponent={<div className="speech-bubble text-color2">React (JavaScript)</div>} />
            </li>
            <li className="skill-item">
              <HoverIcon
                MainComponent={
                  <div className="react-icon">
                    <SiFlask
                      id="icon-flask" />
                  </div>
                }
                HiddenComponent={<div className="speech-bubble text-color2">Flask (Python)</div>} />
            </li>
          </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2 className="text-color2">{tS("deploy")}</h2>
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
              HiddenComponent={<div className="speech-bubble text-color2">NGINX</div>} />
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
              HiddenComponent={<div className="speech-bubble text-color2">Let's encrypt</div>} />
          </li>
        </ul>
      </div>
      <div className="Skills-subcontainer">
        <h2 className="text-color2">{tS("other")}</h2>
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
                HiddenComponent={<div className="speech-bubble text-color2">node.js</div>} />
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
                HiddenComponent={<div className="speech-bubble text-color2">Typescript</div>} />
            </li>
          </ul>
      </div>
    </div>
  );
}

export default PFSkills;
