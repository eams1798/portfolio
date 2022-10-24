import './styles/NavbarList.css';

const NavbarList = ({direction, items}) => {
  const style = {
    flexDirection: direction
  }

  return (
    <ul className={`Navbar-list ${direction}`} style={style}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item[Object.keys(item)[0]]}>
            <div className="Navbar-button">{Object.keys(items[index])[0]}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavbarList;