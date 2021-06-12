import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import topTabNavigator from './topTabNavigator';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryTopNav from './HistoryTopNav';
import Strings from '../localization/LocalizedString';
import Request from '../Request';
import BranchList from '../AccidentHistory/BranchList';
// import BranchList from '../BranchList';
import Accidents from '../Accident/Accidents';
import AccidentsTopNav from './AccidentsTopNav';
import History from '../History/History';
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import AccidentHistoryTap from './AccidentHistoryTab';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HistoryStack = createStackNavigator();
const AccidentStack = createStackNavigator();
const AccidentHistoryStack = createStackNavigator();

const topStack = ({navigation}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top"
        component={topTabNavigator}
        options={{
          // headerStatusBarHeight: 0,

          headerLeft: () => (
            <Icons
              onPress={() => navigation.openDrawer()}
              style={{marginLeft: 10}}
              name={'menu'}
              size={25}
              color={colors.white}
            />
          ),
          headerRight: () => (
            <Icons
              // onPress={() => navigation.pop()}
              style={{marginRight: 10}}
              name={'bell'}
              size={25}
              color={colors.white}
            />
          ),

          title: Strings.orderplaced,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignItems: 'center',
            textAlign: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const HistoryTab = ({navigation}) => (
  <HistoryStack.Navigator>
    <HistoryStack.Screen
      name="History"
      component={HistoryTopNav}
      options={{
        // headerStatusBarHeight: 0,
        headerLeft: () => (
          <Icons
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
            name={'menu'}
            size={25}
            color={colors.white}
          />
        ),
        headerRight: () => (
          <Icons
            // onPress={() => navigation.pop()}
            style={{marginRight: 10}}
            name={'bell'}
            size={25}
            color={colors.white}
          />
        ),
        title: Strings.history,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    />
  </HistoryStack.Navigator>
);

const AccidentTab = ({navigation}) => (
  <AccidentStack.Navigator>
    <AccidentStack.Screen
      name="Accident"
      component={AccidentsTopNav}
      options={{
        // headerStatusBarHeight: 0,
        headerLeft: () => (
          <Icons
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
            name={'menu'}
            size={25}
            color={colors.white}
          />
        ),
        headerRight: () => (
          <Icons
            // onPress={() => navigation.pop()}
            style={{marginRight: 10}}
            name={'bell'}
            size={25}
            color={colors.white}
          />
        ),
        title: Strings.accidents,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    />
  </AccidentStack.Navigator>
);

const AccidentHistoryTabNav = ({navigation}) => (
  <AccidentHistoryStack.Navigator>
    <AccidentHistoryStack.Screen
      name="Accident History"
      component={AccidentHistoryTap}
      options={{
        // headerStatusBarHeight: 0,
        headerLeft: () => (
          <Icons
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
            name={'menu'}
            size={25}
            color={colors.white}
          />
        ),
        headerRight: () => (
          <Icons
            // onPress={() => navigation.pop()}
            style={{marginRight: 10}}
            name={'bell'}
            size={25}
            color={colors.white}
          />
        ),
        title: Strings.accidentHistory,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    />
  </AccidentHistoryStack.Navigator>
);

const TabNavigator = () => {
  return (
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
        name="Request"
        component={topStack}
        options={{
          tabBarLabel: Strings.request,
          tabBarIcon: ({color}) => (
            <Icons name="desktop-mac-dashboard" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryTab}
        options={{
          tabBarLabel: Strings.history,
          tabBarIcon: ({color}) => (
            <Icons name="bullhorn" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Accidents"
        component={AccidentTab}
        options={{
          tabBarLabel: Strings.accidents,
          tabBarIcon: ({color}) => (
            <Icons name="alert-outline" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="BranchList"
        component={AccidentHistoryTabNav}
        options={{
          tabBarLabel: Strings.accidentHistory,
          tabBarIcon: ({color}) => (
            <Icons name="alert-outline" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
