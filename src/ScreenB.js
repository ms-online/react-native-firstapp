import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function ScreenB({navigation, route}) {
  const {ItemId, ItemName} = route.params;
  const onPressHandler = () => {
    navigation.navigate('ScreenA', {message: '消息来自于ScreenB!'});
    // navigation.goBack();
    // navigation.setParams({ItemId: 2});
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>屏幕B</Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
        onPress={onPressHandler}>
        <Text style={styles.text}>进入屏幕A</Text>
      </Pressable>
      <Text style={styles.textItem}>ID:{ItemId}</Text>
      <Text style={styles.textItem}>Name:{ItemName}</Text>
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
  textItem: {
    fontSize: 20,
    margin: 10,
  },
});
