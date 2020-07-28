import React, {Component} from 'react';

class Console extends Component{
    render(){
        return(
            <div className="console">
                <div className="shipyard">
                    <h3 className="shipyard--title">Ship Management</h3>
                    <ul className="shipyard--list">
                        <li className="shipyard--ship">
                            <div className="shipyard--ship-dock">
                                <p className="shipyard--ship-dock-type">Carrier</p>
                                <button>Add</button>
                            </div>
                        </li>
                        <li className="shipyard--ship">
                            <div className="shipyard--ship-dock">
                                <p className="shipyard--ship-dock-type">Battlecruiser</p>
                                <button>Add</button>
                            </div>
                        </li>
                        <li className="shipyard--ship">
                            <div className="shipyard--ship-dock">
                                <p className="shipyard--ship-dock-type">Destroyer</p>
                                <button>Add</button>
                            </div>
                        </li>
                        <li className="shipyard--ship">
                            <div className="shipyard--ship-dock">
                                <p className="shipyard--ship-dock-type">Submarine</p>
                                <button>Add</button>
                            </div>
                        </li>                        
                        <li className="shipyard--ship">
                            <div className="shipyard--ship-dock">
                                <p className="shipyard--ship-dock-type">Patrol Boat</p>
                                <button>Add</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="warRoom">
                    <h3 className="warRoom--title">Attack Controls</h3>
                    <input/>
                    <button>Attack</button>
                </div>
                <div className="gameControls">
                    <h3 className="warRoom--title">Game Controls</h3>
                    <button>Surrender</button>
                    <button>New game</button>
                </div>
            </div>
        )
    }
}

export default Console;