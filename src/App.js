import React from 'react';
import './App.css';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { initializeApp } from './redux/app-reducer'

import Navbar from './componets/NavBar/NavBar';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';

import { Route } from 'react-router-dom';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';



// function App(props) {
//     return (
//             <div className="app-wrapper ">
//                 <HeaderContainer />
//                 <Navbar />
//                 <div className="app-wrapper-contnent">

//                     {/* Route - компонента которая следит за URL в браузере и в случае совпаденрия вызывает метот render */}
//                     {/* path/:param_Name */}
//                     <Route path="/profile/:userId?" 
//                         render={() => <ProfileContainer />} 
//                     />

//                     <Route path="/dialogs" 
//                         render={() => <DialogsContainer />} 
//                     />

//                     <Route path="/news" component={News} />
//                     <Route path="/music" component={Music} />
//                     <Route path="/settings" component={Settings} />
//                     <Route path="/users" render={() => <UsersContainer/> } />

//                     <Route path={'/login'} 
//                         render={ () => <Login />  }/>
//                 </div>
//             </div>
//     );
// }


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <div className="app-wrapper ">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-contnent">

                    {/* Route - компонента которая следит за URL в браузере и в случае совпаденрия вызывает метот render */}
                    {/* path/:param_Name */}
                    <Route path="/profile/:userId?"
                        render={() => <ProfileContainer />}
                    />

                    <Route path="/dialogs"
                        render={() => <DialogsContainer />}
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



export default compose(
    withRouter,
    connect(null, {initializeApp} )
)(App)