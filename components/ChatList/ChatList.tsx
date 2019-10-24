import React from 'react'
import { Text, ScrollView } from 'react-native'
import ChatItem from '../ChatItem'
import { Mensaje } from '../../type-defs'

interface Props {
    list: Mensaje[]
}
 
const ChatList: React.FC<Props> = (props) => {
    console.log(props)
    return (
        <ScrollView style={{marginBottom: 30, display: 'flex', flex: 1, flexDirection: 'column'}}>
            {props.list.map(item => {
                return <ChatItem key={item.id} name={item.mensaje} direction={item.type === "In" ? "left" : "right"} img={item.user.imagen} />
            })}
        </ScrollView>
    )
}

export default ChatList