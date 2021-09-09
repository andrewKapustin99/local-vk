import React from "react"
import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={classes['app-header']}>
            <a href="#" className={classes.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
            </a>
        </header>
    )
}

export default Header;