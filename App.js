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
  const [name, setName] = useState('Summer');
  const [session, setSession] = useState({id: 1, age: 18});
  const [current, setCurrent] = useState(true);
  const onClickHandler = () => {
    setName('Lucy');
    setSession({id: 2, age: 20});
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>
        My student ID is {session.id},my age is {session.age}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="切换人员" onPress={onClickHandler} />
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
