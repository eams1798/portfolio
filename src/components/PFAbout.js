import './styles/PFAbout.css'
import {BsGithub} from 'react-icons/bs';
import {SiMedium, SiLinkedin} from 'react-icons/si';


const PFAbout = () => {
  return (
    <div id="About" className="About-container">
      {/* <div className="username-image" /> */}
      <div className="description">
        <h1 className="description-title">Hello! I'm Estefano Misme</h1>
        <p>
          I'm a Software Engineer specialized in web development. When I create a custom website or app, I first check all the resources are shown in the correct way before styling them. My hobbies are gaming, browsing through Youtube and Facebook and learning more and doing more projects related with my career.
        </p> 
      </div>
      <div className="my-social-media">
        <p>You can find me here:</p>
        <div className="links-social">
          <a href="https://github.com/eams1798" target="_blank" rel="noreferrer">
            <BsGithub
              className="react-icon-link"
              id="icon-github" />
          </a>
          <a href="https://eams.medium.com/" target="_blank" rel="noreferrer">
            <SiMedium
              className="react-icon-link"
              id="icon-medium"/>
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
