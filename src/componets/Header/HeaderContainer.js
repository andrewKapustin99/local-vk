import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from "../../redux/auth-reducer";
import { compose } from "redux";


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
// ____________________________________________________________________________________________________________

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}

export default compose(
    connect(mapStateToProps, { logout } )
)(HeaderContainer)

