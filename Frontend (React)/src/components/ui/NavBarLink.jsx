import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const NavBarLink = () => {
  const { isAuthenticated, setIsAuthenticated, username } =
    useContext(AuthContext);

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      localStorage.removeItem("access");
      setIsAuthenticated(false);
      toast.success("Logged out successfully!");
    }
  };

  return (
    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarNav}`}>
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Shop
        </NavLink>
      </li>

      {isAuthenticated ? (
        <>
          <li className="nav-item">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
              {username}
            </NavLink>
          </li>

          <li className="nav-item" onClick={logout}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.navLink : styles.navLink
              }
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "5px" }}
              />
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Resgister
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavBarLink;
