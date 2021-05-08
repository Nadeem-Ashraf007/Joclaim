import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import colors from '../Constants/colors';
import Auth from './Auth';
import Splash from '../Splash';
import PaidAccident from './PaidAccident';
import UpdateAccidents from './UpdateAccidents';
import {AuthContext} from '../Constants/context';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
// import Opened from '../Profile/Accident/Opened';
// import Parts from '../Parts';
// import Cars from '../Cars';
// import Settings from '../Settings';
import Paid from '../Requests/Paid';
import CardAccident from '../Accident/CardAccident';
import OpenAccident from '../Accident/OpenAccident';
import ClearanceSummary from '../Accident/ClearanceSummery';
import PaidAccidentDetails from '../Requests/accidentDetails/PaidAccidentDetails';
const Stack = createStackNavigator();
const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  const CustonDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustonDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  const theme = isDarkTheme ? CustonDarkTheme : CustonDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="PaidAccidentDetails"
              component={PaidAccidentDetails}
              options={{headerShown: false}}
            />  */}

            <Stack.Screen
              name="PaidAccident"
              component={PaidAccident}
              options={{
                title: 'Accident Details ',
                headerStyle: {
                  backgroundColor: colors.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '85%',
                },
              }}
            />

            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{headerShown: false}}
              // options={({navigation}) => ({
              //   headerTitle: () => <Header navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="OpenAccident"
              component={OpenAccident}
              options={{
                title: 'View Accident',
                headerStyle: {
                  backgroundColor: colors.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '85%',
                },
              }}
            />
            <Stack.Screen name="CardAccident" component={CardAccident} />
            <Stack.Screen name="Paid" component={Paid} />

            <Stack.Screen
              name="UpdateAccidents"
              component={UpdateAccidents}
              options={{
                title: 'Update Accident',
                headerStyle: {
                  backgroundColor: colors.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '85%',
                },
              }}
            />
            <Stack.Screen
              name="ClearanceSummary"
              component={ClearanceSummary}
              options={{
                title: 'Clearance Summary',
                headerStyle: {
                  backgroundColor: colors.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '85%',
                },
              }}
            />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default Routes;
