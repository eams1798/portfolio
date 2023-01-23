import './styles/PFNavbar.css';
import NavbarList from './NavbarList';
import { useState } from 'react';
import { ItemNav } from '../interfaces/ItemNav';

const PFNavbar = ({logo, items}: {logo: any, items: ItemNav[]}) => {
  const [respNavbarElemClassname, setrespNavbarElemClassname] = useState<string>('');
  const closeSidebar = () => {
    setrespNavbarElemClassname('closed');
    setTimeout(() => {
      setrespNavbarElemClassname('');
    }, 500);
  };

  return (
    <>
      <nav className="Navbar-container">
        <div className="Navbar-logo">
          {logo}
        </div>
        <NavbarList
          direction='row'
          items={items}
          />
        <div
          className="Btn-show-sidebar"
          onClick={() => {
            setrespNavbarElemClassname('opened');
            }} />
      </nav>
      <div
        className={`Dark-screen ${respNavbarElemClassname}`.trim()}
        onClick={closeSidebar} />
      <div className = {`Sidebar ${respNavbarElemClassname}`.trim()} >
        <div
          className='Btn-close'
          onClick={closeSidebar}>x</div>
        <NavbarList
          direction='column'
          items={items} />
      </div>
    </>
  );
}

export default PFNavbar;
