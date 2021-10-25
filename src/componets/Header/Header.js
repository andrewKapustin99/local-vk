import React from "react"
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
    console.log(props);
    return (
        <header className={classes['app-header']}>
            <div>
                <div>
                    {/* <a href="#" className={classes.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
                    </a> */}
                    <NavLink to={'/profile'} className={classes.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
                    </NavLink>
                </div>

                <div>
                    <div className={classes.loginBlock}>
                        {props.isAuth 
                            ? <div> <img /> <p>{props.login}</p> <button onClick={props.logout}>Logout</button> </div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>

                    <div></div>
                </div>
            </div>
        </header>
    )
}

export default Header;