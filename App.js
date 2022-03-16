/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="进入百度"
        onPress={() => Linking.openURL('https://www.baidu.com/')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
