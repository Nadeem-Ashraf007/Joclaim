import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
const AccidentDetail = ({DamagePointID, PointName, dissable}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
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
