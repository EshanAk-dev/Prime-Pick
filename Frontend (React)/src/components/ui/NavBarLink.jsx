import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBarLink = () => {
  return (
    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarNav}`}>
      <li className="nav-item">
        <a className={`${styles.navLink} ${styles.navLinkActive}`} href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <Link to="/profile" className={styles.navLink}>
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <a className={styles.navLink} href="#!">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className={styles.navLink} href="#!">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavBarLink;
