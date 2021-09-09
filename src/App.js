import React from 'react';
import './App.css';

import Header from './componets/Header/Header';
import Navbar from './componets/NavBar/NavBar';
import Profile from './componets/Profile/Profile';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';

// npm i react-router-dom 
import Dialogs from './componets/Dialogs/Dialogs';
import { Route } from 'react-router-dom';


function App(props) {
    return (
            <div className="app-wrapper ">
                <Header />
                <Navbar />
                <div className="app-wrapper-contnent">

                    <Route path="/profile" 
                        render={() => <Profile 
                        state={props.state.profilePage} 
                        addPost={props.addPost} 
                        updatePost={props.updateNewPostText} 
                    />} />

                    <Route path="/dialogs" 
                        render={() => <Dialogs 
                        state={props.state.messagesPage} 
                        addMessage={props.addMessage}
                        updateNewMessage={props.updateNewMessage}
                    />} />

                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
    );
}



export default App;