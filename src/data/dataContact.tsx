import { BsWhatsapp } from "react-icons/bs";
import gmailIcon from "../other_icons/gmail.png";
import { SocialLink } from '../interfaces/SocialLink';
import {AiOutlineWhatsApp} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const dataContact: SocialLink[] = [
  {
    keyName: 'link-gmail',
    url: 'mailto:eams1798@gmail.com',
    icon:
    <div className='react-icon' id='gmail-icon-container'>
      <img
        id="icon-gmail"
        src={gmailIcon}
        alt="gmail" />
    </div>
  }, {
    keyName: 'link-whatsapp',
    url: 'https://wa.link/gqjxxx',
    icon:
      <FaWhatsapp
        className="react-icon-link"
        id="icon-whatsapp"
        color='green' />
  }
];

export default dataContact;