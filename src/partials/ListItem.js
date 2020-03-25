import React from 'react'
import { Text, View, Image } from "react-native"
import Box from './Box'

const ListItem = ({ title, description, image }) => {
    return (<View style={{ height: 60, alignContent: "space-between" }}>
        <View>
            <Image source={{ uri: image, width: 50, height: 50, }} style={{ borderRadius: 25 }} />
        </View>
        <View style={{ paddingLeft: 55, paddingTop: 10 }}>
            <Text style={{ fontSize: 18 }}>{title}</Text>
            <Text style={{ fontSize: 14, color: "gray" }}>{description}</Text>
        </View>
    </View>)
}

export default ListItem