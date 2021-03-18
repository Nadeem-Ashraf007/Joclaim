import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomSidebarMenu';

// import navigationTheme from './navigationTheme';
import colors from '../config/colors';
import Splash from '../Splash';
import Login from '../Login';
//Tab screen
import Dashboard from '../Dashboard';
import BranchList from '../BranchList';
import Quotations from '../Quotations';
import Demands from '../Demands';
import ForgetPassword from '../ForgetPassword';
import Profile from '../Profile';
import Parts from '../Parts';
import Cars from '../Cars';
import Settings from '../Settings';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
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

const tabNav = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: colors.secondary,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 16,
      },
    }}>
    <Tab.Screen
      name="Demands"
      component={Demands}
      options={{
        tabBarLabel: 'Demands',
        tabBarIcon: ({color}) => (
          <Icons name="bullhorn" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Quotations"
      component={Quotations}
      options={{
        tabBarLabel: 'Quotations',
        tabBarIcon: ({color}) => (
          <Icons name="format-list-checkbox" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color}) => (
          <Icons name="desktop-mac-dashboard" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="BranchList"
      component={BranchList}
      options={{
        tabBarLabel: 'BranchList',
        tabBarIcon: ({color}) => (
          <Icons name="clipboard-list" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen name="Home" component={tabNav} />
  </Drawer.Navigator>
);
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
