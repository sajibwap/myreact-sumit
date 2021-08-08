/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Clock from './Clock';

class ClockList extends Component {
    state = { lists: [1, 2, 3] };

    render() {
        return this.state.lists.map((list) => <Clock key={list} />);
    }
}

export default ClockList;
