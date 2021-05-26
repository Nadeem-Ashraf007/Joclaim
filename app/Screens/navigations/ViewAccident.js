import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OpenAccident from '../Accident/OpenAccident';
import WorkshhopFinding from '../Accident/updateAccident/WorkshhopFinding';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';
import Strings from '../localization/LocalizedString';
const TopTab = createMaterialTopTabNavigator();
const ViewAccident = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        showIcon: true,
        tabStyle: {
          alignItems: 'flex-end',
          //   paddingBottom: '22%',
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        style: {
          backgroundColor: colors.secondary,
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen
        name="OpenAccident"
        component={OpenAccident}
        options={{
          tabBarLabel: Strings.viewAccidentInfo,
        }}
      />

      <TopTab.Screen
        name="WorkshhopFinding"
        component={WorkshhopFinding}
        options={{
          tabBarLabel: Strings.workShopFinding,
        }}
      />
    </TopTab.Navigator>
  );
};

export default ViewAccident;
