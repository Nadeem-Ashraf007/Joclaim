import React from 'react';
import {View, Text} from 'react-native';
import Header from './Components/Header';

const Quotations = ({navigation}) => {
  return (
    <View>
      <Header title="Quotations" navigation={navigation} />
      <Text>Quotations</Text>
    </View>
  );
};

export default Quotations;
