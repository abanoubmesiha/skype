import React from 'react'
import './App.css';
import '../store/static-data';
import Sidebar from '../components/Sidebar';
import Main from './Main';
import store from '../store';
import  _ from 'lodash';

const App = () => {
    const { contacts, user, activeUserId } = store.getState();
  
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  };

export default App;