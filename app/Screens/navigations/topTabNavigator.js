import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderPlaced from '../Requests/OrderPlaced';
import {connect} from 'react-redux';
import Delivered from '../Requests/Delivered';
import Paid from '../Requests/Paid';
import Cancelled from '../Requests/Cancelled';
import Closed from '../Accident/Closed';
import Deleted from '../Accident/Deleted';
import RequetClosed from '../Requests/RequestClosed';
import RequestDeleted from '../Requests/RequestDeleted';
import colors from '../Constants/colors';
import {Text} from 'react-native-elements';
import {Global} from '../Constants/Global';
import Strings from '../localization/LocalizedString';
const TopTab = createMaterialTopTabNavigator();
const topTabNavigator = ({userData, userRequest}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  const paid = userRequest.request.filter((r) => r.StatusID == 17);
  const Delete = userRequest.request.filter((r) => r.IsDeleted == true);
  const Delivers = userRequest.request.filter((r) => r.StatusID == 11);
  const requestClosed = userRequest.request.filter((r) => r.StatusID == 18);
  const close = requestClosed.length;
  const deliver = Delivers.length;
  const RequestPaid = paid.length;
  const deleteIcon = Delete.length;
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
              <Text style={styles.badgeicontext}>{deliver ? deliver : 0}</Text>
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
              <Text style={styles.badgeicontext}>
                {RequestPaid ? RequestPaid : 0}
              </Text>
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
        component={RequetClosed}
        options={{
          tabBarLabel: Strings.closed,
          tabBarIcon: () => (
            <View style={styles.closeicon}>
              <Text style={styles.badgeicontext}>{close ? close : 0}</Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Delete"
        component={RequestDeleted}
        options={{
          tabBarLabel: Strings.deleted,
          tabBarIcon: () => (
            <View style={styles.deleteicon}>
              <Text style={styles.badgeicontext}>
                {deleteIcon ? deleteIcon : 0}
              </Text>
            </View>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};
const styles = StyleSheet.create({
  badgeicon: {
    // width: 35,
    position: 'absolute',
    top: 29,
    left: 73,
  },

  Delivericon: {
    position: 'absolute',
    top: 29,
    left: 60,
  },
  paidicon: {
    position: 'absolute',
    top: 29,
    left: 36,
  },
  cancleicon: {
    position: 'absolute',
    top: 29,
    left: 62,
  },
  closeicon: {
    position: 'absolute',
    top: 29,
    left: 48,
  },
  deleteicon: {
    position: 'absolute',
    top: 29,
    left: 48,
  },
  badgeicontext: {
    color: colors.primary,
    backgroundColor: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 5,
    // padding: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    userRequest: state.reques,
  };
};

export default connect(mapStateToProps)(topTabNavigator);
