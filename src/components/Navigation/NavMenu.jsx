const NavMenu = ({menuItems}) => {

    return (<>
    <nav>
     <ul className="nav__links">
    {
      Array.isArray(menuItems) && menuItems.map((menuItem,index) => <li key={index}> <a href={menuItem.path}> {menuItem.label} </a> </li>)
    }
    </ul>
    </nav>
    </>);
}

export default NavMenu;