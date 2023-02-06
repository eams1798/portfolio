import './styles/PFAbout.css'
import { useTranslation } from 'react-i18next';
import dataSocialLinks from '../data/dataSocialLinks';
import SocialLink from './SocialLink';
import resume from "../data/Estefano_Misme_Resume.pdf";


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
      <div className="resume">
        <p>{tA("my-resume")} <a href={resume} target="_blank" rel="noreferrer"><u>{tA("here")}</u></a>.</p>
      </div>
      <div className="my-social-media">
        <p className='text-color1'>{tA("find-me")}</p>
        <div className="links-social">
          {dataSocialLinks.map(({keyName, url, icon}) => (
            <SocialLink key={keyName} url={url} icon={icon}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PFAbout;
