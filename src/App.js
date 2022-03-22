/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
const App = () => {
  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'ScreenA') {
              iconName = 'home';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            } else if (route.name === 'ScreenB') {
              iconName = 'address-card';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          // tabBarActiveTintColor: '#f0f',
          // tabBarInactiveTintColor: '#555',
          // tabBarShowLabel: true,
          // tabBarActiveBackgroundColor: '#ddd',
          tabBarLabelStyle: {fontSize: 12},
          // tabBarItemStyle: {width: 100},
          tabBarStyle: {backgroundColor: 'powderblue'},
        })}
        activeColor="#fff"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'My Home',
          }}
        />
        <Tab.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'About US',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
