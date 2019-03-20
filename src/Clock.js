import React, { Component } from 'react'
import Toggle from "./Toggle";

export default class Clock extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toString()}.</h2>
                <Toggle />
            </div>
        )
    }
}

