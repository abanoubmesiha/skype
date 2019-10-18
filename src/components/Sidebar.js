import React, { Component } from 'react'
import './Sidebar.css';
import User from '../container/User';

const Sidebar = ({contacts}) => {
    return <aside className="Sidebar" >
                {contacts.map(contact => <User user={contact} key={contact.user_id}/>)}
           </aside>
}

export default Sidebar;