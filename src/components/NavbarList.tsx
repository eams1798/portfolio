import './styles/NavbarList.css';
import { useTranslation } from 'react-i18next';
import LanguageList from './LanguageList';
import { ItemNav } from '../interfaces/ItemNav';

type FlexDirection = 'row' | 'column' ;

const NavbarList = ({direction, items}: {direction: FlexDirection, items: ItemNav[]}) => {
  const [ tN, ] = useTranslation("Navbar");
  const style = {
    flexDirection: direction
  }

  return (
    <ul className={`Navbar-list ${direction}`} style={style}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            <div className="Navbar-button text-color1">{tN(item.title)}</div>
          </a>
        </li>
      ))}
      <LanguageList />
    </ul>
  );
}

export default NavbarList;