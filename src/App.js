/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenA"
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {width: 250, backgroundColor: '#fff'},
          drawerHideStatusBarOnOpen: false,
          overlayColor: '#ffffff99',
          headerTitleAlign: 'center',
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'My Home',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="home"
                color={focused ? '#0080ff' : '#999999'}
                size={focused ? 20 : 16}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'About US',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="address-card"
                color={focused ? '#0080ff' : '#999999'}
                size={focused ? 20 : 16}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
