import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderPlaced from '../OrderPlaced';
import Delivered from '../Delivered';
import Paid from '../Requests/Paid';
import Cancelled from '../Cancelled';
import Closed from '../Closed';
import Deleted from '../Deleted';
import colors from '../config/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Badge, Text} from 'react-native-elements';

import {Global} from '../Components/Global';
import Strings from '../pages/LocalizedString';
import AsyncStorage from '@react-native-community/async-storage';
const TopTab = createMaterialTopTabNavigator();
const topTabNavigator = () => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  // const BadgedIcon = withBadge(1)(Icon);
  return (
    <TopTab.Navigator
      initialRouteName={!changeView ? 'Delete' : 'OrderPlace'}
      tabBarOptions={{
        showIcon: true,
        scrollEnabled: true,
        tabStyle: {
          alignSelf: 'center',
          height: 55,
          paddingBottom: '22%',
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        style: {
          backgroundColor: colors.secondary,

          // justifyContent: 'center',
          // marginTop: 50,
        },
        labelStyle: {
          textTransform: 'none',
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen
        component={OrderPlaced}
        options={{
          tabBarLabel: Strings.orderplaced,
          tabBarIcon: () => (
            <View style={styles.badgeicon}>
              <Text style={styles.badgeicontext}>0</Text>
            </View>
          ),
        }}
        name="OrderPlaced"
      />
      <TopTab.Screen
        name="Delivered"
        component={Delivered}
        options={{
          tabBarLabel: Strings.delivered,
          tabBarIcon: () => (
            <View style={styles.Delivericon}>
              <Text style={styles.badgeicontext}>0</Text>
            </View>
          ),
        }}
      />

      <TopTab.Screen
        name="Paid"
        component={Paid}
        options={{
          tabBarLabel: Strings.paid,
          tabBarIcon: () => (
            <View style={styles.paidicon}>
              <Text style={styles.badgeicontext}>{Global.badgeicon}</Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Cancelled"
        component={Cancelled}
        options={{
          tabBarLabel: Strings.cancelled,
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
          tabBarLabel: Strings.closed,
          tabBarIcon: () => (
            <View style={styles.closeicon}>
              <Text style={styles.badgeicontext}>0</Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Delete"
        component={Deleted}
        options={{
          tabBarLabel: Strings.deleted,
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
  badgeicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 27,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 73,
  },

  Delivericon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 60,
  },
  paidicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 36,
  },
  cancleicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 62,
  },
  closeicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    left: 48,
  },
  deleteicon: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
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
export default topTabNavigator;

{
  /* <FlatList
  style={{flexGrow: 0}}
  data={this.state.newOrders}
  showsVerticalScrollIndicator={false}
  keyExtractor={({index}) => index}
  renderItem={({item}) => {
    return (
      <NewOrder
        name={item.user.name}
        orderNo={`Order No ` + item.id}
        onPress={() =>
          navigation.navigate('OrderDetailScreen', {
            id: item.id,
            onSave: getOrders,
          })
        }
      />
    );
  }}
/>; */
}
