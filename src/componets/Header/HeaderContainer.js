import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from "../../redux/auth-reducer";
import { compose } from "redux";


class HeaderContainer extends React.Component {
    render() {
        console.log(this.props);
        return <Header {...this.props} />
    }
}
// ____________________________________________________________________________________________________________

let mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { logout } )
)(HeaderContainer)

