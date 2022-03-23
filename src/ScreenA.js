import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function ScreenA({navigation, route}) {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
    // navigation.replace('Screen_B')
    // navigation.openDrawer();
    // navigation.closeDrawer();
    // navigation.toggleDrawer();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>屏幕A</Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
        onPress={onPressHandler}>
        <Text style={styles.text}>进入屏幕B</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.message}</Text>
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
