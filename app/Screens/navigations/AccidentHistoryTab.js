import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Opened from '../Accident/Opened';
import AccidentHistoryOpened from '../AccidentHistory/AccidentHistoryOpened';
import Closed from '../Accident/Closed';
import colors from '../Constants/colors';
import {fetchUsers} from '../redux/accident/accidentAction';
import Deleted from '../Accident/Deleted';
import {Global} from '../Constants/Global';
import Strings from '../localization/LocalizedString';
const TopTab = createMaterialTopTabNavigator();
const AccidentHistoryTap = ({userData}) => {
  const data = userData.users.Accidents.filter((r) => r.StatusID == 21);
  const opened = userData.users.Accidents.filter((r) => r.StatusID == 20);
  const Delete = userData.users.Accidents.filter((r) => r.IsDeleted == true);
  const closeIcon = data.length;
  const openedIcon = opened.length;
  const deleteIcon = Delete.length;
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
        component={AccidentHistoryOpened}
        options={{
          tabBarLabel: Strings.open,
          tabBarIcon: () => (
            <View style={styles.openicon}>
              <Text style={styles.badgeicontext}>
                {Global.accidentHistoryIcon ? Global.accidentHistoryIcon : 0}
              </Text>
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
              <Text style={styles.badgeicontext}>
                {closeIcon ? closeIcon : 0}
              </Text>
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="Deleted"
        component={Deleted}
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
  openicon: {
    position: 'absolute',
    top: 29,
    left: 45,
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
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccidentHistoryTap);
