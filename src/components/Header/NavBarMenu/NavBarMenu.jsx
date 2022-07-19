import { NavLink } from 'react-router-dom';

import { items } from './items';
import styles from './nav-bar-menu.module.scss';

const getActiveLink = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;
};

const NavBarMenu = () => {

    const elements = items.map(({ id, to, text }) => (
        <li key={id} className={styles.navMenuItem}>
            <NavLink to={to} className={getActiveLink}>
                {text}
            </NavLink>
        </li>
    ))

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.navMenuList}>
                {elements}
            </ul>
        </nav>
    );
};

export default NavBarMenu;