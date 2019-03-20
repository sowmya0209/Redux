import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor() {
        super()
        this.state = { isToggleon: this.prevState }
    }
    handleClick(prevState) {
        this.setState({ isToggleon: !this.isToggleon })
    }
    render() {
        return (
            <button onClick={e => this.handleClick(e)}>
                {this.state.isToggleon ? "ON" : "OFF"}
            </button>
        )
    }
}
