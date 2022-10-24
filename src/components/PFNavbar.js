import './styles/PFNavbar.css';
import NavbarList from './NavbarList';
import { useState } from 'react';

const PFNavbar = ({logo, items}) => {
  const [respNavbarElemClassname, setrespNavbarElemClassname] = useState('');
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
