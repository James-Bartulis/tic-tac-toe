import React from 'react';
import Board from './Board'
import InfoPanel from './InfoPanel';

export default class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { history: [Array(9).fill('')] };
    }

    checkWin(history) {
        const B = history.at(-1);
        const C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6];
        for (let i = 0; i < 24; i += 3) { // checks groups of 3 for winning conditions
            if (B[C[i]] && B[C[i]] === B[C[i + 1]] && B[C[i + 1]] === B[C[i + 2]])
                return true;
        }
        return false;
    }

    onMove = index => {
        const History = this.state.history;
        const board = History.at(-1).slice();
        if (board.at(index) !== '' || this.checkWin(this.state.history)) return;
        board[index] = History.length % 2 ? 'X' : 'O';
        History.push(board);
        this.setState({ history: History });
    }

    goBackInHistory = index => {
        this.setState({ history: this.state.history.slice(0, index + 1) });
    }

    render() {
        return (
            <div className='TTT'>
                <Board
                    board={this.state.history.at(-1)}
                    onMove={this.onMove}
                />
                <InfoPanel
                    history={this.state.history}
                    goBackInHistory={this.goBackInHistory}
                    checkWin={this.checkWin}
                />
            </div>
        );
    }
}
