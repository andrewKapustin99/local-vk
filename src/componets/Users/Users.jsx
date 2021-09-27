import * as axios from "axios";
import React from "react";
import classes from './Users.module.css'
// JSX не работает без импорта reacr 

import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    // Если констрктор не делает ничего кроме мтоды super, его можно не писать
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanged= (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map( p => {
                        return <span onClick={ (e)=>{ this.onPageChanged(p) } } key={p} className={this.props.currentPage === p && classes.selectedPage} >{p}</span>
                    })}
                </div>
                <div className={classes.wrap_element}>
                    {this.props.users.map(u => <div className={classes.wrapper} key={u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        <div className={classes.wrap_padding}>
                            <div className={classes.info_wrap}>
                                <h4>{u.name}</h4>
                                <p>{u.status}</p>
                            </div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }} className={classes.unfollow}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} className={classes.follow}>Follow</button>
                            }
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Users;