import React from 'react';
import { View,Text, DrawerLayoutAndroid, SafeAreaView, } from 'react-native';
import InputComponents from './src/screens/InputComponents';
import GlobalStyles from './src/utils/GlobalStyles';
import Navigation from './src/partials/Navigation';


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.notchSafeArea}>
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => Navigation}>
        <View style={GlobalStyles.mainContent}>
          <Text style={{ margin: 10, fontSize: 15, }}>Hello World!</Text>
          <InputComponents />
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

