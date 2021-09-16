import React from 'react';
import './App.css';

import Header from './componets/Header/Header';
import Navbar from './componets/NavBar/NavBar';
import Profile from './componets/Profile/Profile';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';

// import Dialogs from './componets/Dialogs/Dialogs';
import DialogsContainer from './componets/Dialogs/DialogsContainer';

import { Route } from 'react-router-dom';
import store from './redux/store';


function App(props) {
    return (
            <div className="app-wrapper ">
                <Header />
                <Navbar />
                <div className="app-wrapper-contnent">

                    <Route path="/profile" 
                        render={() => <Profile 
                            store={props.store}
                        />} 
                    />

                    <Route path="/dialogs" 
                        render={() => <DialogsContainer 
                            store = {props.store}
                        />} 
                    />

                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
}



export default App;