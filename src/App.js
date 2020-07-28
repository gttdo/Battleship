import React, {Component} from 'react';
import './css/style.css';

// Layout
import Header from './layout/header';
import GameBoard from './layout/gameBoard';
import Console from './layout/console';


class App extends Component {
  state = {
    permission: false
  }

  permissionAllowed = () => {
    this.setState(prevState => ({
      permission: true
    }))
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <GameBoard activateBoard={this.state.permission}/>
        <div className="sidebarLeft">Left sidebar</div>
        <div className="sidebarRight">Right sidebar</div>
        <Console boardPermission={this.permissionAllowed}/>
        <footer className="footer">&copy; Developed By Gerardo Vinces</footer>
      </div>
    );
  }
}

export default App;
