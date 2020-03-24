import React from 'react'
import { View, Text, ListView, FlatList } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles';

const routes = [
    "Inputs",
    "Pickers",
    "Validations",
    "Firebase"
];

const Navigation = (
    <View >
        <View style={GlobalStyles.navAvatar} >
            <Text style={GlobalStyles.navTitle}>Features app</Text>
        </View>
        <View style={{height:50}}></View>
        <FlatList
            data={routes}
            renderItem={({ item, index }, ) => <Text key={index} style={GlobalStyles.navItem}>{item}</Text>} />
    </View>
);

export default Navigation