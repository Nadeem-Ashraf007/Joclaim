import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderParts from '../Requests/OrderParts';
import RecycledParts from '../Requests/RecycledParts';
import AccidentDetails from '../Requests/AccidentDetails';
import TaskDetail from '../Requests/TaskDetail';
import colors from '../config/colors';
import Paid from '../Requests/Paid';
import PaidAccidentDetails from '../Requests/PaidAccidentDetails';
import {Global} from '../Components/Global';
const TopTab = createMaterialTopTabNavigator();
const UpdateAccidents = ({route, navigation, position, state}) => {
  const [badge, setbadge] = React.useState(Global.badge);
  return (
    <TopTab.Navigator
      initialRouteName="PaidAccidentDetails"
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
        name="PaidAccidentDetails"
        component={PaidAccidentDetails}
        options={{
          tabBarLabel: 'View Details',
          //   tabBarIcon: () => (
          //     <View style={styles.deleteicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />

      <TopTab.Screen
        name="OrderParts"
        component={OrderParts}
        options={{
          tabBarLabel: 'Order Parts',
          //   tabBarIcon: () => (
          //     <View style={styles.openicon}>
          //       <Text style={styles.badgeicontext}>
          //         {Global.badge ? Global.badge : 0}
          //       </Text>
          //     </View>
          //   ),
        }}
      />
      <TopTab.Screen
        name="RecycledParts"
        component={RecycledParts}
        options={{
          tabBarLabel: 'Recycled Parts',
          //   tabBarIcon: () => (
          //     <View style={styles.closeicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />
      <TopTab.Screen
        name="AccidentDetail"
        component={AccidentDetails}
        options={{
          tabBarLabel: 'Accident Detail',
          //   tabBarIcon: () => (
          //     <View style={styles.deleteicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />

      <TopTab.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{
          tabBarLabel: 'Task Detail',
          //   tabBarIcon: () => (
          //     <View style={styles.deleteicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />
    </TopTab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   openicon: {
//     // backgroundColor: colors.white,
//     // flexDirection: 'row',
//     // height: 20,
//     // width: 20,
//     borderRadius: 10,
//     position: 'absolute',
//     top: 29,
//     left: 60,
//   },
//   closeicon: {
//     // backgroundColor: colors.white,
//     // height: 20,
//     // width: 20,
//     // flexDirection: 'row',
//     position: 'absolute',
//     top: 29,
//     left: 44,
//   },
//   deleteicon: {
//     // backgroundColor: colors.white,
//     // height: 20,
//     // width: 20,
//     // borderRadius: 10,
//     position: 'absolute',
//     top: 29,
//     left: 48,
//   },
//   badgeicontext: {
//     backgroundColor: colors.white,
//     width: 25,
//     borderRadius: 10,
//     color: colors.primary,
//     textAlign: 'center',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
// });
export default UpdateAccidents;
