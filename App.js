/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
const App = () => {
  const [name, setName] = useState('');

  //点击空白处隐藏键盘
  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View style={styles.body}>
        <Text style={styles.text}>请输入姓名：</Text>
        <TextInput
          // multiline
          style={styles.input}
          onChangeText={value => setName(value)}
          placeholder="e.g:Summer"
          // maxLength={4}
          // editable={false}
          // secureTextEntry
          // keyboardType="phone-pad"
        />
        <Text style={styles.text}>我的名字叫：{name}</Text>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
