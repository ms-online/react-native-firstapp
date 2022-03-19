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
  Modal,
} from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning,setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 2) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true)
    }
  };
  return (
    <View style={styles.body}>
      <Modal visible={showWarning} onRequestClose={()=>setShowWarning(false)} animationType="slide" hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
            <Text style={styles.text}>警告！</Text>
            </View>
            <View style={styles.warning_body}>
            <Text style={styles.text}>姓名长度必须大于2个字符</Text>
            </View>
            <Pressable style={styles.warning_button} onPress={()=>setShowWarning(false)} android_ripple={{ color:'#fff' }}>
              <Text style={styles.text}>确认</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
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
    fontSize: 15,
    // fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  centered_view:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#00000099',
  },
  warning_modal:{
    width:300,
    height:300,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#000',
    borderRadius:20,
  },
  warning_title:{
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ff0',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  warning_body:{
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button:{
    height:48,
    backgroundColor:'#00ffff',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  }
});

export default App;
