import { NavLink, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>

        <NavLink to="about">About</NavLink>
        <NavLink to="item">Item</NavLink>
      </nav>

      <div className="pages">
        {' '}
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
