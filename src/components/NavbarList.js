import './styles/NavbarList.css';
import { useTranslation } from 'react-i18next';
import LanguageList from './LanguageList';

const NavbarList = ({direction, items}) => {
  const [ tN, ] = useTranslation("Navbar");
  const style = {
    flexDirection: direction
  }

  return (
    <ul className={`Navbar-list ${direction}`} style={style}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item[Object.keys(item)[0]]}>
            <div className="Navbar-button text-color1">{tN( Object.keys(items[index])[0] )}</div>
          </a>
        </li>
      ))}
      <LanguageList />
    </ul>
  );
}

export default NavbarList;