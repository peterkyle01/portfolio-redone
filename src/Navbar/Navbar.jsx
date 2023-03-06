import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiOutlineQuestion } from "react-icons/ai";
import { SiMicrosoftacademic } from "react-icons/si";
import {GiSkills} from "react-icons/gi"
import { MdOutlineWork, MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";
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
            <NavLink to="/">
              <AiFillHome />
              <p>Home</p>
            </NavLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Education">
              <SiMicrosoftacademic />
              <p>Education</p>
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Experience">
              <MdOutlineWork />
              <p>Experience</p>
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Skills">
              <GiSkills />
              <p>Skills</p>
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#About">
              <AiOutlineQuestion />
              <p>About</p>
            </HashLink>
          </li>
          <li className="li_navbar">
            <HashLink smooth to="/#Contacts">
              <MdContactMail />
              <p>Contacts</p>
            </HashLink>
          </li>
        </ul>
      </nav>
      {menu ? (
        " "
      ) : (
        <motion.nav
          animate={{ scale: [0.5, 1.5,0.75,1.25,0.9,1.05,1] }}
          transition={{
            duration: 1.5,

          }}
          className="menu_responsive">
          <ul className="ul_navbar_responsive">
            <NavLink to="/">
              {" "}
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <AiFillHome />
                  <p>Home</p>
                </span>
              </li>
            </NavLink>
            <HashLink smooth to="/#Education">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <SiMicrosoftacademic />
                  <p>Education</p>
                </span>
              </li>
            </HashLink>
            <HashLink smooth to="/#Experience">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <MdOutlineWork />
                  <p>Experience</p>
                </span>
              </li>
            </HashLink>
            <HashLink smooth to="/#Skills">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <GiSkills />
                  <p>Skills</p>
                </span>
              </li>
            </HashLink>
            <HashLink smooth to="/#About">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <AiOutlineQuestion />
                  <p>About</p>
                </span>
              </li>
            </HashLink>
            <HashLink smooth to="/#Contacts">
              <li
                className="li_navbar_responsive"
                onClick={() => setMenu(true)}>
                <span>
                  <MdContactMail />
                  <p>Contacts</p>
                </span>
              </li>
            </HashLink>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}

export default Navbar;
