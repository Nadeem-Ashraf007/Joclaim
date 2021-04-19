import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import ForgetPassword from '../ForgetPassword';
import Strings from '../pages/LocalizedString';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
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
          title: Strings.forgetpassword,
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
export default Auth;
