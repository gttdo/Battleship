import React, {Component} from 'react';
import Board from '../components/Board';

class GameBoard extends Component {
    render(){
        return(
            <div className="gameBoard">
                <h2 className="gameBoard--title">Battleship</h2>
                <Board activateBoard={this.props.activateBoard}/>
            </div>
        )
    }
}

export default GameBoard;