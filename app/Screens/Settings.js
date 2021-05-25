import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Strings from '../Screens/localization/LocalizedString';
import colors from './Constants/colors';
import {Global} from './Constants/Global';
const Settings = () => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  const changeLanguage = (value) => {
    Strings.setLanguage(value);
  };
  const toggleFunction = () => {
    if (!changeView) {
      setChangeView(true);
      changeLanguage('en');
    }
    if (changeView) {
      setChangeView(false);
      changeLanguage('ar');
    }
  };
  return (
    <View style={styles.languageContainer}>
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
    alignSelf: 'flex-end',
    margin: 5,
  },
  languagetext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.opacity,
  },
});
export default Settings;
