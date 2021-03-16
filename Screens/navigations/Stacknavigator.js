import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
// import colors from '../config/colors';
import Splash from '../Splash';
import Login from '../Login';
import Demands from '../Demands';
import Quotations from '../Quotations';
import ForgetPassword from '../ForgetPassword';
import Profile from '../Profile';
import DrawerNavigator from './DrawerNavigator';

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Demands"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerTransparent: true,
          title: 'Forget password',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          // headerTitleStyle: {
          //   width: '90%',
          //   textAlign: 'center',
          // },
        }}
      />
    </Stack.Navigator>
  );
};

export {Routes, ProfileStackNavigator};
