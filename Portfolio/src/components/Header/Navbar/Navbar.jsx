import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <>
      <nav className={style.navbarStyling}>
        <ul className={style.navList}>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/"}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/"}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkgoldenrod" } : { color: "white" }
              }
              to={"/"}
            >
              Contact
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
