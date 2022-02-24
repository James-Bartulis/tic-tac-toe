import React from 'react';

export default class Square extends React.Component {
    render() {
        const value = this.props.value;
        return (
            <div
                onClick={this.props.onMove}
                className='Square'>
                {value}
            </div>
        );
    }
}