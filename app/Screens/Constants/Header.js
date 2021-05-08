import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../Constants/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <Icons
        name="menu"
        size={25}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.text}>{title}</Text>
      <Icons name="bell" size={25} color="white" />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // flex: 1,
    width: '100%',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: colors.white,
  },
});
export default Header;
