import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Opened from '../Accident/Opened';
import Closed from '../Closed';
import colors from '../config/colors';
import Deleted from '../Deleted';
import {Global} from '../Components/Global';
const TopTab = createMaterialTopTabNavigator();
const AccidentsTopNav = () => {
  const [badge, setbadge] = React.useState(Global.badge);
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
                {Global.badge ? Global.badge : 0}
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
              <Text style={styles.badgeicontext}>0</Text>
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
              <Text style={styles.badgeicontext}>0</Text>
            </View>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  openicon: {
    // backgroundColor: colors.white,
    // flexDirection: 'row',
    // height: 20,
    // width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 60,
  },
  closeicon: {
    // backgroundColor: colors.white,
    // height: 20,
    // width: 20,
    // flexDirection: 'row',
    position: 'absolute',
    top: 29,
    left: 44,
  },
  deleteicon: {
    // backgroundColor: colors.white,
    // height: 20,
    // width: 20,
    // borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 48,
  },
  badgeicontext: {
    backgroundColor: colors.white,
    width: 25,
    borderRadius: 10,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default AccidentsTopNav;
