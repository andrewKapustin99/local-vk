import React, { Suspense } from 'react';
import './App.css';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { initializeApp } from './redux/app-reducer'

import Navbar from './componets/NavBar/NavBar';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import UsersContainer from './componets/Users/UsersContainer';

import { Route } from 'react-router-dom';
import HeaderContainer from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';
import Preloader from './componets/Common/Preloader/Preloader';


import store from './redux/redux-store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';




const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper ">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-contnent">

                    {/* Route - компонента которая следит за URL в браузере и в случае совпаденрия вызывает метот render */}
                    {/* path/:param_Name */}
                    <Route path="/profile/:userId?"
                        render={withSuspense(ProfileContainer)}
                    />

                    <Route path="/dialogs"
                        render={withSuspense(DialogsContainer)}
                    />

                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={() => <UsersContainer />} />

                    <Route path={'/login'}
                        render={() => <Login />} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store} >
            <AppContainer />
        </Provider >
    </BrowserRouter>
}
export default MainApp