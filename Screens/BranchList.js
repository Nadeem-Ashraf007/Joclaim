import React from 'react';
import {View, Text} from 'react-native';
import Header from './Components/Header';

const BranchList = ({navigation}) => {
  return (
    <View>
      <Header title="Branch List" navigation={navigation} />
      <Text> BranchList</Text>
    </View>
  );
};

export default BranchList;
