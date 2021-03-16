import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileStackNavigator} from './Stacknavigator';
import TabNavigator from '../navigations/TabNavigator';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Demands" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
