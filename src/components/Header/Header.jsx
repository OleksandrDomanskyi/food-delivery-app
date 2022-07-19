import NavBarMenu from "./NavBarMenu/NavBarMenu";

import styles from './header.module.scss';

const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <NavBarMenu />
        </header>
    );
};

export default Header;