import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Header = () => {
  return (
   <View style={styles.header}><Text style={styles.text}>React Native</Text></View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height:50,
        backgroundColor: '#00f',
        justifyContent:'center',
        alignContent: 'center',
    },
    text:{
        fontSize:25,
        fontWeight: 'bold',
        color:'#ffffff',
        textAlign: 'center',
    }
})
export default Header
