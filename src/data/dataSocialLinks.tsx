import {BsGithub} from 'react-icons/bs';
import {SiMedium, SiLinkedin} from 'react-icons/si';
import {SocialLink} from '../interfaces/SocialLink';

const dataSocialLinks: SocialLink[] = [
  {
    keyName: 'link-github',
    url: 'https://github.com/eams1798',
    icon:
      <BsGithub
        className="react-icon-link"
        id="icon-github"
        color='black' />
  }, {
    keyName: 'link-medium',
    url: 'https://eams.medium.com/',
    icon:
      <SiMedium
        className="react-icon-link"
        id="icon-medium"
        color='white'/>
  }, {
    keyName: 'link-linkedin',
    url: 'https://www.linkedin.com/in/eams1798/',
    icon:
      <SiLinkedin
        className="react-icon-link"
        id="icon-linkedin"
        color='rgb(10, 102, 194)'/>
  }
];

export default dataSocialLinks;