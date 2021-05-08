import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Constants/colors';

const Opacity = ({onPress, title, style, icon}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.opacity, style]}>
        <Text style={styles.txt}>{title}</Text>
        {icon && <Icon name={icon} size={30} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: '10%',
  },
  opacity: {
    backgroundColor: colors.yellow,
    padding: 5,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.white,
  },
  icon: {
    marginLeft: 13,
    color: colors.white,
  },
});
export default Opacity;
