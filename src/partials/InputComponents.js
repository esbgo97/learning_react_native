import React,{useState} from 'react'
import { View,Text,TextInput } from "react-native"

const InputComponents = () => {
    const [name, changeName] = useState("")
    return (<View >
        <Text>TextInput with value: {name}!</Text>
        <TextInput placeholder="Enter any text here!!!" value={name} onChangeText={(val) => changeName(val)} />
    </View>);
}

export default InputComponents