import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import colors from '../config/colors';
import UserProfile from '../Profile/UserProfile';
import CustomSidebarMenu from './CustomSidebarMenu';
const Drawer = createDrawerNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        // itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="UserProfile" component={UserProfile} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
