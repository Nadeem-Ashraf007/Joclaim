import React from 'react';
import {View, Text} from 'react-native';
import colors from '../Constants/colors';
const AccidentNote = ({TextValue}) => {
  return (
    <View>
      <Text style={{color: colors.primary, fontSize: 16}}>Note</Text>
      <Text
        style={{
          borderWidth: 0.5,
          borderRadius: 10,
          padding: 5,
          marginVertical: 5,
        }}>
        {TextValue}
      </Text>
    </View>
  );
};

export default AccidentNote;
