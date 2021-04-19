import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

const Sacreen = ({children, style}) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,
  },
});
export default Sacreen;
