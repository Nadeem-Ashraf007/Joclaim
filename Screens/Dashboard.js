import React from 'react';
import {View, Text} from 'react-native';
import Header from './Components/Header';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Header title="Dashboard" navigation={navigation} />
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
