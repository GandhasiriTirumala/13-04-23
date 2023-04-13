import TakeMessage from "./TakeMessage";
import React, { Component } from 'react'
import DisplayMessage from './DisplayMessage'
export default class MessageList extends Component {
    state = {
        messageList: []
    }
    add = (currentMsg) => {
        console.log(currentMsg)
        this.setState({
            messageList: [...this.state.messageList, currentMsg]
        })
    }
    render() {
        console.log(this.state.messageList)
        return ( <
                div > < TakeMessage onSubmit = { this.add }
                /> {
                this.state.messageList.map((msg) => ( <
                    DisplayMessage key = { Math.random() }
                    message = { msg.newMessage }
                    />
                ))
            } <
            /div>
    )
}
}