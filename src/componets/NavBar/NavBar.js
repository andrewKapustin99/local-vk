import React from "react";
import classes from './NavBar.module.css';

import { faHome, faUser, faEnvelope, faNewspaper, faMusic, faCog, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={classes['app-navbar']}>
            <ul className={classes.nav__list}>
                <li>
                {/* activeClassName={classes.active} - Класс, который присваивает элементу, когда он активен. */}
                    <NavLink to="/profile"  activeClassName={classes.activeLink} className={classes.item}>
                        <FontAwesomeIcon icon={faUser} className={classes.side_bar__icone} />
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={classes.item} activeClassName={classes.activeLink}>
                        <FontAwesomeIcon icon={faUsers} className={classes.side_bar__icone} />
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={classes.item} activeClassName={classes.activeLink}>
                        <FontAwesomeIcon icon={faEnvelope} className={classes.side_bar__icone} />
                        <span>Dialogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={classes.item} activeClassName={classes.activeLink}>
                        <FontAwesomeIcon icon={faNewspaper} className={classes.side_bar__icone} />
                        <span>News</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" className={classes.item} activeClassName={classes.activeLink}>
                        <FontAwesomeIcon icon={faMusic} className={classes.side_bar__icone} />
                        <span>Music</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={classes.item} activeClassName={classes.activeLink}>
                        <FontAwesomeIcon icon={faCog} className={classes.side_bar__icone} />
                        <span>Settings</span>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar