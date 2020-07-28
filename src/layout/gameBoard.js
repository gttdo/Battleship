import React, {Component} from 'react';
import Board from '../components/board';

class GameBoard extends Component {
    render(){
        return(
            <div className="gameBoard">
                <h2 className="gameBoard--title">Battleship</h2>
                <Board/>
            </div>
        )
    }
}

export default GameBoard;