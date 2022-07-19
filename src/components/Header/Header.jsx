import NavBarMenu from "./NavBarMenu/NavBarMenu";
import AuthMenu from "./AuthMenu/AuthMenu";

import styles from './header.module.scss';

const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <NavBarMenu />
            <AuthMenu />
        </header>
    );
};

export default Header;