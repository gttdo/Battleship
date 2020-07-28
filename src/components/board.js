import React, {Component} from 'react';

class Board extends Component {

    selectCell = (event) => {
        let selectedCell = event.target.id
        console.log(selectedCell);
        document.getElementById(selectedCell).classList.toggle("board--grid-cell-active");
    }
    render(){
        let rows = ['a','b','c','d','e','f','g','h'];
        let columns = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let cellId = [];
        let cells = [];
        let labelX = [];
        let labelY = [];

        // Cell Id generation
        for(let y=0; y < 8; y++){
            for(let x=0; x < 8; x++){
                cellId.push(`${columns[y]}${rows[x]}`)
            }
        }

        // Label Y-axis
        for(let i=0; i < 8; i++){
        labelY.push(<div key={i} id={i} className="board--label-yAxis-cell">{columns[i]}</div>)
        }

        // Label X-axis
        for(let i=0; i < 8; i++){
        labelX.push(<div key={i} id={i} className="board--label-xAxis-cell">{rows[i]}</div>)
        }

        // Cells
        for(let i=0; i < 64; i++){
            cells.push(<div 
                key={cellId[i]} 
                id={cellId[i]}
                className="board--grid-cell" 
                onClick={
                    this.props.activateBoard ? this.selectCell : null}></div>)
        }

        return(
            <div className="board">
             <div className="board--start"></div>
             <div className="board--label board--label-xAxis">{labelX}</div>
             <div className="board--label board--label-yAxis">{labelY}</div>
             <div className="board--grid">{cells}</div>
            </div>
        )
    }
}

export default Board;