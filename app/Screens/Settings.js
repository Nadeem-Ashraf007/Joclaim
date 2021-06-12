import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Strings from '../Screens/localization/LocalizedString';
import colors from './Constants/colors';
import {Global} from './Constants/Global';

const storeToken = async (
  access_token,
  ICWorkshopID,
  CompanyID,
  StatusID,
  EmployeeID,
  ChangeLanguage,
  languageChange,
) => {
  // debugger;
  try {
    await AsyncStorage.multiSet(
      [
        ['accessToken', access_token],
        ['workshopId', ICWorkshopID],
        ['companyid', CompanyID],
        ['statusId', StatusID],
        ['employeeId', EmployeeID],
        ['changeLanguage', JSON.stringify(ChangeLanguage)],
        ['languageChange', JSON.stringify(languageChange)],
      ],
      (res) => {
        console.log('login store token func:' + res);
      },
    );
  } catch (error) {
    console.log('something went wrong');
  }
};
const Settings = ({navigation}) => {
  debugger;
  const [changeView, setchangeView] = React.useState(Global.changeView);
  Global.changeView = changeView;
  // const changeLanguage = (value) => {
  //   Strings.setLanguage(value);
  // };

  const toggleFunction = () => {
    if (!changeView) {
      setchangeView(true);
      // changeLanguage('en');
      navigation.navigate('Splash');
    }
    if (changeView) {
      setchangeView(false);
      // changeLanguage('ar');
      navigation.navigate('Splash');
    }
  };
  debugger;
  storeToken(changeView);
  // alert(changeView);
  return (
    <View style={styles.languageContainer}>
      <Text style={styles.text}>Select Language</Text>
      <TouchableOpacity onPress={() => toggleFunction()}>
        <Text style={styles.languagetext}>
          {!changeView ? 'English' : 'العربية'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  languageContainer: {
    // backgroundColor: colors.opacity,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  languagetext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.opacity,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Settings;
