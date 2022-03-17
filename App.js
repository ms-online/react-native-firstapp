/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('样式测试');

  const onClickHandler = () => {
    setName('样式已修改');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name}</Text>
      <View style={styles.button}>
        <Button title="update style" onPress={onClickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '50%',
    height: '50%',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
    margin: 40,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 150,
    height: 60,
  },
});

export default App;
