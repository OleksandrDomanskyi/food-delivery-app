import { NavLink } from "react-router-dom";

import styles from './auth-menu.module.scss';

const getActiveLink = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
};

const AuthMenu = () => {

    return (
        <div className={styles.navMenu}>
            <ul className={styles.navMenuList}>
                <li className={styles.navMenuItem}>
                    <NavLink to="/login" className={getActiveLink}>Login</NavLink>
                </li>
                
                <li>
                    <NavLink to="/register" className={getActiveLink}>Register</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default AuthMenu;