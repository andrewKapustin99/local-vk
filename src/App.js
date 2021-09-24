import React from 'react';
import './App.css';

import Header from './componets/Header/Header';
import Navbar from './componets/NavBar/NavBar';
import Profile from './componets/Profile/Profile';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';

import { Route } from 'react-router-dom';


function App(props) {
    return (
            <div className="app-wrapper ">
                <Header />
                <Navbar />
                <div className="app-wrapper-contnent">

                    {/* Route - компонента которая следит за URL в браузере и в случае совпаденрия вызывает метот render */}
                    <Route path="/profile" 
                        render={() => <Profile />} 
                    />

                    <Route path="/dialogs" 
                        render={() => <DialogsContainer />} 
                    />

                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={() => <UsersContainer/> } />
                </div>
            </div>
    );
}



export default App;