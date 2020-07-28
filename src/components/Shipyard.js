import React, {Component} from "react";

class Shipyard extends Component {
    render(){
        return(
            <div className="shipyard">
                <h3 className="shipyard--title">Ship Management</h3>
                <ul className="shipyard--list">
                    <li className="shipyard--ship">
                        <div className="shipyard--ship-dock">
                            <p className="shipyard--ship-dock-type">Carrier</p>
                            <button id="carrier" onClick={this.props.boardPermission}>Add</button>
                        </div>
                    </li>
                    <li className="shipyard--ship">
                        <div className="shipyard--ship-dock">
                            <p className="shipyard--ship-dock-type">Battlecruiser</p>
                            <button id="battlecruiser" onClick={this.props.boardPermission}>Add</button>
                        </div>
                    </li>
                    <li className="shipyard--ship">
                        <div className="shipyard--ship-dock">
                            <p className="shipyard--ship-dock-type">Destroyer</p>
                            <button id="destroyer" onClick={this.props.boardPermission}>Add</button>
                        </div>
                    </li>
                    <li className="shipyard--ship">
                        <div className="shipyard--ship-dock">
                            <p className="shipyard--ship-dock-type">Submarine</p>
                            <button id="submarine" onClick={this.props.boardPermission}>Add</button>
                        </div>
                    </li>                        
                    <li className="shipyard--ship">
                        <div className="shipyard--ship-dock">
                            <p className="shipyard--ship-dock-type">Patrol Boat</p>
                            <button id="patrol" onClick={this.props.boardPermission}>Add</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Shipyard;