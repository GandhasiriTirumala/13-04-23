import React, { Component } from 'react'
export default class DisplayMessage extends React.Component {
    state = {
        date: new Date().toLocaleString("en-US", { hour: "numeric", minute: 'numeric' })
    }
    render() {
        return ( <
            div >
            <
            p > { this.props.message } <
            span > { this.state.date } <
            /span> < /
            p > <
            /div>
        )
    }
}