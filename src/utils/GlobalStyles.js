import { StyleSheet, Platform, StatusBar } from 'react-native'

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    notchSafeArea: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    box: {
        flex: 1,
        width: 20.0
    },
    navAvatar:{
        flex:1,
        alignItems:"center",
        paddingTop:25
    },
    navTitle:{
        fontSize:24,
        color:"#5d81bb"
    },
    navItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    mainContent:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    }
})

export default GlobalStyles