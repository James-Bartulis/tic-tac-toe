import React from 'react';

export default class InfoPanel extends React.Component {
    render() {
        // Prior States
        let historySize = this.props.history.length;
        const next = historySize % 2 ? 'X' : 'O';
        var states = [];
        for (let i = 1; i < historySize-1; i++) {
            states.push(
                <button key={i} onClick={() => { this.props.goBackInHistory(i) }}>{i}</button>
            );
        }
        const priorStates = <div>{states}</div>;
        // Winner
        let winner = '';
        if (this.props.checkWin(this.props.history)) {
            winner = <div>Winner: {historySize % 2 ? 'O' : 'X'}</div>
        }else if(historySize === 10)
            winner = <div>Draw!</div>
        // Reset
        let reset = () => this.props.goBackInHistory(0);

        return (
            <div className='InfoPanel'>
                Next Player: {next}
                {priorStates}
                {winner}
                <button onClick={reset}>Reset</button>
            </div>
        );
    }
}