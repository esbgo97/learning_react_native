import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles'

import SafeArea from '../partials/SafeArea'
import Box from '../partials/Box'
import InputComponents from '../partials/InputComponents'
import PickersComponent from '../partials/PickersComponent'
import { Switch, } from 'react-native-gesture-handler'



const InputsScreen = ({ navigation }) => {
    const [enabledButton, toggleButton] = useState(true)
    return <SafeArea style={GlobalStyles.notchSafeArea}>
        <Text style={GlobalStyles.navTitle}>Inputs Pages </Text>
        <InputComponents />
        <Box height={100}/>
        <PickersComponent />
        <Box height={100}/>
        <Text>Switch value is: {"is:" + enabledButton}</Text>
        <Switch value={enabledButton} onValueChange={() => toggleButton(!enabledButton)} />

        <Box height={100}/>
        <Button  color={enabledButton ? "#00b1d2":"gray"} onPress={() => { if (!enabledButton) return; navigation.navigate("Home") }} title="Home Screen" />

    </SafeArea>
}

export default InputsScreen