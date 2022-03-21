import React from 'react'
import {Pressable,Text,StyleSheet} from 'react-native'
const CustomButton = (props) => {
  return (
     <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : props.color},
          styles.button,
          {...props.style}
        ]}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // delayLongPress={2000}
        android_ripple={{color: '#00f'}}
        onPress={props.onPressFunction}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
 button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 15,
    // fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
})

export default CustomButton
