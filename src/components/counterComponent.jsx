import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0
    }
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }
    render() { 
        return (
        <>
            <span style={{ fontSize:15, fontWeight: 'bold', }} className="badge badge-primary m-2 p-1">
                    { this.state.count } Count
            </span>
            <button className='btn btn-secondary btn-sm'>CLick me</button>
        </> );
    }
}
 
export default Counter;