import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <span className="header--logo">Battleship</span>
                <nav className="header--nav">
                    <ul className="header--nav-list">
                        <li className="header--nav-list-item">Profile</li>
                        <li className="header--nav-list-item">Login</li>
                        <li className="header--nav-list-item">Signup</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;