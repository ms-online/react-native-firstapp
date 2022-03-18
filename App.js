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
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  };
  return (
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
      {/* <Button
        title={submitted ? '已提交' : '提交'}
        onPress={onPressHandler}
        color="#00f"
        // disabled={submitted}
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? '已提交' : '提交'}</Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
        style={styles.button}
        activeOpacity={0.4}
        onPress={onPressHandler}
        underlayColor="#555">
        <Text style={styles.text}>{submitted ? '已提交' : '提交'}</Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? '已提交' : '提交'}</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        delayLongPress={2000}
        android_ripple={{color: '#00f'}}
        onLongPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? '已提交' : '提交'}</Text>
      </Pressable>
      {submitted ? <Text style={styles.text}>{name}提交成功！</Text> : null}
    </View>
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
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    // fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
