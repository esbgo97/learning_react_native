import React, { useState } from 'react'
import { View, Text, Picker } from "react-native"

const avaliableColors = [
    "red",
    "green",
    "blue"
]

const PickersComponent = () => {
    const [textColor, changeColor] = useState("blue")
    return <View>
        <Text style={{ color: textColor,fontSize:24.0 }}>Selecciona el color de este Texto!</Text>
        <Picker selectedValue={textColor}
            onValueChange={(c) => changeColor(c)}>
            {avaliableColors.map((c, k) => <Picker.Item key={k} label={c} value={c} />)}
        </Picker>

    </View>
}

export default PickersComponent