/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  function Screen_A({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('Screen_B');
      // navigation.replace('Screen_B')
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>屏幕A</Text>
        <Pressable
          style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
          onPress={onPressHandler}>
          <Text style={styles.text}>进入屏幕B</Text>
        </Pressable>
      </View>
    );
  }

  function Screen_B({navigation}) {
    const onPressHandler = () => {
      //  navigation.navigate('Screen_A')
      navigation.goBack();
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>屏幕B</Text>
        <Pressable
          style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
          onPress={onPressHandler}>
          <Text style={styles.text}>进入屏幕A</Text>
        </Pressable>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Screen_A"
          component={Screen_A}
          options={{
            title: 'My Home',
          }}
        />
        <Stack.Screen
          name="Screen_B"
          component={Screen_B}
          options={{
            title: 'About US',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

export default App;
