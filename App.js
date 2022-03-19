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
  Alert,
  ToastAndroid,
} from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 2) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert('警告','姓名长度必须大于2个字符',[
      //   {text:'不再提示',onPress:()=>console.warn('不再提示')},
      //   {text:'取消',onPress:()=>console.warn('取消点击')},
      //   {text:'确定',onPress:()=>console.warn('确认点击')}],{cancelable:true,onDismiss:()=>console.warn('弹出框已经取消')})
      // ToastAndroid.show('姓名长度必须大于2个字符',ToastAndroid.LONG)
      // ToastAndroid.showWithGravity('姓名长度必须大于2个字符',ToastAndroid.LONG,ToastAndroid.TOP)
      ToastAndroid.showWithGravityAndOffset('姓名长度必须大于2个字符',ToastAndroid.LONG,ToastAndroid.TOP,200,0)
    }
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
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // delayLongPress={2000}
        android_ripple={{color: '#00f'}}
        onPress={onPressHandler}>
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
