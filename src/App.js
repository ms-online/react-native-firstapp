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
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from '../src/CustomButton'
import Header from '../src/Header';

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
    <ImageBackground source={{ uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170413%2Feff894ff1f5448fe89dbb7941d15ef8f_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650267977&t=356fb47bab2dd6e6837b96816073dbde' }} style={styles.body}>

      <Modal visible={showWarning} onRequestClose={()=>setShowWarning(false)} animationType="slide" hardwareAccelerated transparent>
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
      <Header/>
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
      <CustomButton  onPressFunction={onPressHandler} title={submitted ? '已提交' : '提交'} color={'#00ff00'}/>
      <CustomButton  onPressFunction={()=>{}} title='test' color={'#ff00ff'} style={{margin:10}}/>
      {/* <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // delayLongPress={2000}
        android_ripple={{color: '#00f'}}
        onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? '已提交' : '提交'}</Text>
      </Pressable> */}
      {submitted ?
      <View style={styles.success_submitted}>
         <Text style={styles.text}>{name}提交成功！</Text>
         <Image
         style={styles.image}
         source={require('../assets/correct.png')} resizeMode="stretch"
         blurRadius={0}/>
      </View> :
         <Image
         style={styles.image}
         source={require('../assets/error.png')} resizeMode="stretch"/>}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // justifyContent: 'center',
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
  },
  image:{
    width:100,
    height:100,
  },
  success_submitted:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
