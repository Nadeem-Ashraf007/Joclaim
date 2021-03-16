import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes, ProfileStackNavigator} from './Stacknavigator';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../Dashboard';
import BranchList from '../BranchList';
import colors from '../config/colors';
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
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
      component={Routes}
      options={{
        tabBarLabel: 'Demands',
        tabBarIcon: ({color}) => (
          <Icons name="bullhorn" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Quotations"
      component={ProfileStackNavigator}
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
export default TabNavigator;
