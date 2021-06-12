import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import colors from '../Constants/colors';
import UserProfile from '../Profile/UserProfile';
import CustomSidebarMenu from './CustomSidebarMenu';
import Settings from '../Settings';
import {Global} from '../Constants/Global';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  return (
    <Drawer.Navigator
      drawerPosition={!changeView ? 'right' : 'left"'}
      drawerType="slide"
      drawerContentOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="UserProfile" component={UserProfile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
