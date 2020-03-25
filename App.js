import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen'
import InputsScreen from './src/screens/InputsScreen'
import GlobalStyles from './src/utils/GlobalStyles';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={GlobalStyles.notchSafeArea}>
      <Drawer.Navigator initialRouteName="Home" style={GlobalStyles.notchSafeArea}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Inputs" component={InputsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}