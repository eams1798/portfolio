import {DiHtml5, DiCss3, DiMysql, DiJqueryLogo, DiReact} from 'react-icons/di';
import {SiJavascript, SiGnubash, SiFlask, SiNginx, SiLetsencrypt, SiTypescript, SiGit} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import CIcon from '../other_icons/c.png';
import PyIcon from '../other_icons/python.png';
import { useTranslation } from 'react-i18next';
import { SkillGroupType } from '../interfaces/typeSkills';

const SpeechBubble = ({name}: {name: string}) => {
  const [ tS, ] = useTranslation("Skills");
  return (
    <div className="speech-bubble text-color2">{name.includes(' ')? name: tS(name)}</div>
  );
};

const dataSkills: SkillGroupType[] = [
  {
    groupName: 'Front-end',
    skills: [
      {
        defaultIcon:
          <DiHtml5
            className="react-icon"
            id="icon-html"
            color="orange" />,
        onHoverIcon:
          <SpeechBubble
            name="HTML" />
      }, {
        defaultIcon:
          <DiCss3
            className="react-icon"
            id="icon-css"
            color="blue" />,
        onHoverIcon:
          <SpeechBubble
            name="CSS" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <SiJavascript
              id="icon-javascript"
              color="yellow"/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Javascript" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <SiTypescript
              id="icon-typescript"
              color='rgb(49, 120, 198)'/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Typescript" />
      }, {
        defaultIcon:
          <DiJqueryLogo
            className="react-icon"
            id="icon-jquery"
            color='rgb(1, 97, 138)'/>,
        onHoverIcon:
          <SpeechBubble
            name="JQuery (JavaScript)" />
      }, {
        defaultIcon:
          <DiReact
            className="react-icon"
            id="icon-react"
            color='rgb(0, 218, 249)'/>,
        onHoverIcon:
          <SpeechBubble
            name="React (JavaScript)" />
      }
    ]
  }, {
    groupName: 'Back-end',
    skills: [
      {
        defaultIcon:
          <div className="react-icon">
            <img
              id="icon-clang"
              src={CIcon}
              alt="clang" />
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="c" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <img
              id="icon-python"
              src={PyIcon}
              alt="python" />
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Python" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <SiFlask
              id="icon-flask"
              color='black' />
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Flask (Python)" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <FaNodeJs
              id="icon-node"
              color='rgb(104, 159, 99)'/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="node.js" />
      }, {
        defaultIcon:
          <DiMysql
            className="react-icon"
            id="icon-mysql"
            color="rgb(1, 97, 138)" />,
        onHoverIcon:
          <SpeechBubble
            name="MySQL" />
      }
    ]
  }, {
    groupName: 'web-infra',
    skills: [
      {
        defaultIcon:
          <div className="react-icon">
            <SiGnubash
              id="icon-bash"
              color="black" />
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Bash" />
      },
      {
        defaultIcon:
          <div className="react-icon">
            <SiNginx
              id="icon-nginx"
              color='rgb(0, 150, 57)'/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="NGINX" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <SiLetsencrypt
              id="icon-letsencrypt"
              color='rgb(17, 58, 114)'/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Let's encrypt" />
      }, {
        defaultIcon:
          <div className="react-icon">
            <SiGit
              id="icon-git"
              color='rgb(240, 80, 51)'/>
          </div>,
        onHoverIcon:
          <SpeechBubble
            name="Git" />
      }
    ]
  }
];



export default dataSkills;