import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Opened from '../Accident/Opened';
import Closed from '../Accident/Closed';
import colors from '../config/colors';
import Deleted from '../Accident/Deleted';
import {Global} from '../Components/Global';
const TopTab = createMaterialTopTabNavigator();
const AccidentsTopNav = () => {
  const [badge, setbadge] = React.useState();
  return (
    <TopTab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        showIcon: true,
        tabStyle: {
          alignSelf: 'center',
          height: 55,
          paddingBottom: '22%',
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        style: {
          backgroundColor: colors.secondary,
        },
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          textTransform: 'none',
        },
      }}>
      <TopTab.Screen
        name="Opened"
        component={Opened}
        options={{
          tabBarLabel: 'Opened',
          tabBarIcon: () => (
            <View style={styles.openicon}>
              <Text style={styles.badgeicontext}>
                {Global.Openbadge ? Global.Openbadge : 0}
              </Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Closed"
        component={Closed}
        options={{
          tabBarLabel: 'Closed',
          tabBarIcon: () => (
            <View style={styles.closeicon}>
              <Text style={styles.badgeicontext}>
                {Global.Closebadge ? Global.Closebadge : 0}
              </Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Deleted"
        component={Deleted}
        options={{
          tabBarLabel: 'Deleted',
          tabBarIcon: () => (
            <View style={styles.deleteicon}>
              <Text style={styles.badgeicontext}>
                {Global.Deletebadge ? Global.Deletebadge : 0}
              </Text>
            </View>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  openicon: {
    position: 'absolute',
    top: 29,
    left: 60,
  },
  closeicon: {
    position: 'absolute',
    top: 29,
    left: 44,
  },
  deleteicon: {
    position: 'absolute',
    top: 29,
    left: 48,
  },
  badgeicontext: {
    backgroundColor: colors.white,
    borderRadius: 7,
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    // padding: 1,
  },
});
export default AccidentsTopNav;
