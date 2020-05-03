import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export const Header = () => {

    return(<div>
        <ul className="listStyle">
            <li><Link to="/homePage"><p>Home</p></Link></li>
            <li><Link to="/table"><p>Table</p></Link></li>
            <li><Link to="/admin"><p>Admin</p></Link></li>
        </ul>
    </div>)
}