import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
    render() {
        let board = [], row = [];
        for (let i = 0; i < 3; i++) { // 3 rows per board
            row = [];
            for (let j = 0; j < 3; j++) { // 3 Squares per row
                row.push(<Square
                    key={j}
                    value={this.props.board[3 * i + j]}
                    onMove={() => { this.props.onMove(3 * i + j) }}
                />);
            }
            board.push(<div key={i} className='Row'>
                        {row}
                        </div>);
        }
        return (
            <div className='Board'>
                {board}
            </div>
        );
    }
}