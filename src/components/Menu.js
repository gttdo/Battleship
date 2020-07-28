import React, {Component} from 'react';

class Menu extends Component{
    render(){
        return(
        <div className="menu">
            <h3 className="menu--title">Menu</h3>
            <button>Surrender</button>
            <button>New game</button>
        </div>
        )
    }
}

export default Menu;