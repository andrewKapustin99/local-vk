import React from "react"
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes['app-header']}>
            {/* <a href="#" className={classes.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
            </a>

            <div className={classes.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div> */}
            <div>
                <div>
                    <a href="#" className={classes.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
                    </a>
                </div>

                <div>
                    <div className={classes.loginBlock}>
                        {props.isAuth ? <div> <img /> <p> {props.login} </p> </div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>

                    <div></div>
                </div>
            </div>
        </header>
    )
}

export default Header;