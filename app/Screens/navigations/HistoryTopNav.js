import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Canceled from '../Cancelled';
import Closed from '../Accident/Closed';
import colors from '../Constants/colors';
import Deleted from '../Accident/Deleted';
const TopTab = createMaterialTopTabNavigator();
const HistoryTopNav = () => {
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
        name="Canceled"
        component={Canceled}
        options={{
          tabBarLabel: 'Cancelled',
          tabBarIcon: () => (
            <View style={styles.cancleicon}>
              <Text style={styles.badgeicontext}>0</Text>
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
  cancleicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 60,
  },
  closeicon: {
    backgroundColor: colors.white,
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 46,
  },
  deleteicon: {
    backgroundColor: colors.white,
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 48,
  },
  badgeicontext: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default HistoryTopNav;
