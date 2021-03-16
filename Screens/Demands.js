import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Sacreen from './Components/Sacreen';
import Header from './Components/Header';
import colors from './config/colors';

const Demands = ({navigation}) => {
  return (
    <Sacreen style={styles.screen}>
      <Header title="Demands" navigation={navigation} />
      <Text>have demands yet</Text>
    </Sacreen>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default Demands;
