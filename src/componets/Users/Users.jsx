import React from "react";
import classes from './Users.module.css'
// JSX не работает без импорта reacr 



let Users = (props) => {

    
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, fullName: "Andrew Kapustin", photo: 'https://sun9-67.userapi.com/s/v1/ig2/5rxime1jWw-u3Z2eYUA2yA2mnFdKK688_SE78nZgl1zPH0EqLE6FkwV5h0-jlY2SsIx43CfUDdAITJ3C7Zqob716.jpg?size=200x200&quality=96&crop=1,1,1197,1197&ava=1', location: { country: 'Belarus', city: 'Minsk' }, followed: true },
            { id: 2, fullName: "Ivan Petrov", photo: 'https://pm1.narvii.com/7303/9baf944e3ede78430e21b79547c00878d7691437r1-448-454v2_hq.jpg', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            { id: 3, fullName: "Gena Bobkov", photo: 'https://meragor.com/files/styles//ava_800_800_wm/ava-241.jpg', location: { country: 'Belarus', city: 'Minsk' }, followed: true },
            { id: 4, fullName: "Dina Karasy", photo: 'https://otvet.imgsmail.ru/download/283340280_ac1c27516febe4413fa434ce474fc38b_800.jpg', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            { id: 5, fullName: "Kate BAKHNOVA", photo: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-11.jpg', location: { country: 'Belarus', city: 'Minsk' }, followed: true }
        ])
    }



    let userElements = props.users.map(u => {
        return (
            <div className={classes.wrapper} key={u.id} >
                <img src={u.photo} />
                <div className={classes.wrap_padding}>
                    <div className={classes.info_wrap}>
                        <h4>{u.fullName}</h4>
                        <p>{u.location.city}</p>
                    </div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} className={classes.unfollow}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }} className={classes.follow}>Follow</button>
                    }
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className={classes.wrap_element}>
                {userElements}
            </div>
        </div>
    )
}

export default Users;