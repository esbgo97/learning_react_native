import React from 'react'
import { View, Text, Button } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles'

import SafeArea from '../partials/SafeArea'
import InputComponents from '../partials/InputComponents'
import PickersComponent from '../partials/PickersComponent'



const InputsScreen = ({ navigation }) => {
    return <SafeArea style={GlobalStyles.notchSafeArea}>
        <Text style={GlobalStyles.navTitle}>Inputs Pages </Text>
        <InputComponents />
        <View style={GlobalStyles.vBox30} />
        <PickersComponent />
        <Button onPress={() => { navigation.navigate("Home") }} title="Home Screen" />
    </SafeArea>
}

export default InputsScreen