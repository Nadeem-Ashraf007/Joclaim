import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import colors from './config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './Components/Sacreen';
import Header from './Components/Header';
const Request = ({navigation}) => {
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://qaapi.joclaims.com/api/Company/GetCompanyRequests?CompanyID=15&WorkshopID=1',
      );
      if (response.status == 200) {
      } else {
        alert('invalid credentials');
      }
      console.log('this is response: ', response);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Screen>
      <View>
        <Text>Dashboard</Text>
      </View>
    </Screen>
  );
};

export default Request;
