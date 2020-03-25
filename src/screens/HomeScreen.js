import React from 'react'
import { View, Button, Text } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles'
import SafeArea from '../partials/SafeArea'
import Box from '../partials/Box'

const HomeScreen = ({ navigation }) => {
    return <SafeArea>
        <Box height={100} />
        <Text style={GlobalStyles.navTitle}>Welcome to FirstStepsApp </Text>
        <Text>Developed by esbgo97</Text>

        <View style={GlobalStyles.vBox100}></View>
        <Button onPress={() => { navigation.toggleDrawer() }} title="Menu" />

        <View style={GlobalStyles.vBox100}></View>
        <Button onPress={() => { navigation.navigate("Inputs") }} title="Inputs Screen" />
    </SafeArea>
}

export default HomeScreen