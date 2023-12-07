import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("861c45d9-1231-4ee8-9edb-a31e4d0ec817", props.user.username, props.user.secret)
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
        </div>
    )
}

export default ChatsPage
