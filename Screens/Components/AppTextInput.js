import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
const AppTextInput = ({icon, ...otherprops}) => {
  const [email, setemail] = useState('');
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={colors.mediumgray}
          style={styles.icon}
        />
      )}
      <TextInput
        onChangeText={(email) => setemail(email)}
        style={styles.textinput}
        {...otherprops}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgray,
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  textinput: {
    color: colors.darkgray,
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  icon: {
    marginRight: 5,
  },
});
export default AppTextInput;
