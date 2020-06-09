import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NewsContainer from './components/News/NewsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />

        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />

        <Route path="/users"
          render={() => <UsersContainer />} />

        <Route path="/news"
          render={() => <NewsContainer />} />

        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;