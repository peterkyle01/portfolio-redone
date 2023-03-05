import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(true);

  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/">
          <h1 onClick={() => setMenu(true)}>Peter K.Mwangi</h1>
        </NavLink>
        <div className="toggle_icon" onClick={() => setMenu(!menu)}>
          {menu ? (
            <FaBars size={20} color="white" />
          ) : (
            <FaTimes size={20} color="white" />
          )}
        </div>
      </div>
      <nav className="menu">
        <ul className="ul_navbar">
          <li className="li_navbar">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Education">
              Education
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Experience">
              Experience
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Skills">
              Skills
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#About">
              About
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Contacts">
              Contacts
            </HashLink>
          </li>
        </ul>
      </nav>
      {menu ? (
        " "
      ) : (
        <nav className="menu_responsive">
          <ul className="ul_navbar_responsive">
            <NavLink to="/">
              {" "}
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                Home
              </li>
            </NavLink>
            <HashLink smooth to="/#Education">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                Education
              </li>
            </HashLink>
            <HashLink smooth to="/#Experience">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                Experience
              </li>
            </HashLink>
            <HashLink smooth to="/#Skills">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                Skills
              </li>
            </HashLink>
            <HashLink smooth to="/#About">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                About
              </li>
            </HashLink>
            <HashLink smooth to="/#Contacts">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                Contacts
              </li>
            </HashLink>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
