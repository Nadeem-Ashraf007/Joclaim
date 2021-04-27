import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpdateAccident from '../Accident/UpdateAccident';
import WorkshhopFinding from '../Accident/WorkshhopFinding';
import check from '../Accident/check';
import {Global} from '../Components/Global';
import colors from '../config/colors';
const TopTab = createMaterialTopTabNavigator();
const UpdateAccidents = ({route, navigation, position, state}) => {
  const [badge, setbadge] = React.useState(Global.badge);
  return (
    <TopTab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        showIcon: true,
        tabStyle: {
          alignSelf: 'center',
          // paddingBottom: '22%',
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
        name="check"
        component={check}
        options={{
          tabBarLabel: 'Update Accidents',
          //   tabBarIcon: () => (
          //     <View style={styles.deleteicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />

      <TopTab.Screen
        name="UpdateAccident"
        component={UpdateAccident}
        options={{
          tabBarLabel: 'Update Accidents',
          //   tabBarIcon: () => (
          //     <View style={styles.deleteicon}>
          //       <Text style={styles.badgeicontext}>0</Text>
          //     </View>
          //   ),
        }}
      />

      <TopTab.Screen
        name="WorkshhopFinding"
        component={WorkshhopFinding}
        options={{
          tabBarLabel: 'Workshhop Findig',
          //   tabBarIcon: () => (
          //     <View style={styles.openicon}>
          //       <Text style={styles.badgeicontext}>
          //         {Global.badge ? Global.badge : 0}
          //       </Text>
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
