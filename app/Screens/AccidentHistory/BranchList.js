import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Constants/Header';

const BranchList = ({navigation}) => {
  return (
    <View>
      <Header title="Branch List" navigation={navigation} />
    </View>
  );
};

export default BranchList;
