import React from 'react'
import { View } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles'

const SafeArea = ({ children }) => {
    return (<View style={GlobalStyles.notchSafeArea}>
        <View style={GlobalStyles.container}>{children}</View>
    </View>)

}

export default SafeArea