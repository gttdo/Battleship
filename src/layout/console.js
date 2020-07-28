import React, {Component} from 'react';

//Components
import Shipyard from '../components/Shipyard';
import WarRoom from '../components/WarRoom';
import Menu from '../components/Menu';

class Console extends Component{
    
    render(){
        return(
            <div className="console">
                <Shipyard boardPermission={this.props.boardPermission}/>
                <WarRoom/>
                <Menu/>
            </div>
        )
    }
}

export default Console;