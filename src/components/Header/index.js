import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

// JS ES6
// {'props': {msg: 'hello', 'userDetails': {'firstName: arvind', 'lstname': 'kumar'}}} // object or array destructing
const Header = ({userDetails}) => {
    const {firstName, lastName} = userDetails;
    return (
        <div className="header">
           <div className="header-logo">
               Student Info Entry
               <div className="welcome-message">
                {"Welcome! " + firstName + " " + lastName}
               </div>
           </div>
           <div className="header-links">
               <Link to="/">Student Form</Link>
               <Link to="/list">Student List</Link>
           </div>
        </div>
    );
}

export default Header;