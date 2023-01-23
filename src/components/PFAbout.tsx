import './styles/PFAbout.css'
import {BsGithub} from 'react-icons/bs';
import {SiMedium, SiLinkedin} from 'react-icons/si';
import { useTranslation } from 'react-i18next';


const PFAbout = () => {
  const [tA, ] = useTranslation('About');
  return (
    <div id="About" className="About-container">
      {/* <div className="username-image" /> */}
      <div className="description">
        <h1 className="description-title text-color1">{tA("hello-name", {name: "Estefano Misme"})}</h1> {/* Hello! I'm Estefano Misme */}
        <p className='text-color1'>
          {tA("my-description")}
        </p> 
      </div>
      <div className="my-social-media">
        <p className='text-color1'>{tA("find-me")}</p>
        <div className="links-social">
          <a href="https://github.com/eams1798" target="_blank" rel="noreferrer">
            <BsGithub
              className="react-icon-link"
              id="icon-github"
              color='black' />
          </a>
          <a href="https://eams.medium.com/" target="_blank" rel="noreferrer">
            <SiMedium
              className="react-icon-link"
              id="icon-medium"
              color='white'/>
          </a>
          <a href="https://www.linkedin.com/in/eams1798/" target="_blank" rel="noreferrer">
            <SiLinkedin
              className="react-icon-link"
              id="icon-linkedin"
              color='rgb(10, 102, 194)'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PFAbout;
