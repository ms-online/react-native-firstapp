import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    //  navigation.navigate('Screen_A')
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>屏幕B</Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
        onPress={onPressHandler}>
        <Text style={styles.text}>进入屏幕A</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
