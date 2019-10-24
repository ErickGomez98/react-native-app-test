import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

interface Props {
    name: string,
    direction: 'left' | 'right',
    img: string
}

const ChatItem: React.FC<Props> = (props) => {
    return (
        <View style={{ display: 'flex', justifyContent: props.direction === 'left' ? 'flex-start' : 'flex-end', flexDirection: 'row', marginBottom: 20 }}>
            <Avatar rounded source={{uri: props.img}}/>
            <Text style={{paddingLeft: 10 }} >{props.name}</Text>
        </View>
    )
}

export default ChatItem