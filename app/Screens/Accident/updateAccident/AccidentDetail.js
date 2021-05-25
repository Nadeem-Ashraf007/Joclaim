import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Global} from '../../Constants/Global';
const AccidentDetail = ({DamagePointID, PointName, dissable}) => {
  const [checked, setChecked] = React.useState(false);
  const [changeView, setChangeView] = React.useState(Global.changeView);
  return (
    <View
      style={{
        flexDirection: !changeView ? 'row-reverse' : 'row',
        alignItems: 'center',
      }}>
      <Checkbox
        status={dissable ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!dissable);
        }}
      />

      <Text>{DamagePointID}</Text>
      <Text>{PointName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    // marginVertical: 3,
  },
  checkbox: {
    marginBottom: 5,
  },
});
export default AccidentDetail;
