import React from 'react';
import {View, Text} from 'react-native';
import colors from '../Screens/config/colors';
const Delivered = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Delivered',
      headerTitleAlign: 'center',
      headerBackTitle: ' ',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerLeft: () => (
        <View>
          <Icons
            onPress={() => navigation.pop()}
            style={{marginLeft: 10}}
            name={'arrow-back'}
            size={25}
            color={colors.primary}
          />
        </View>
      ),
      headerRight: () => (
        <View>
          <Icons
            onPress={() => navigation.pop()}
            style={{marginLeft: 10}}
            name={'arrow-back'}
            size={25}
            color={colors.primary}
          />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>Delivered Delivered</Text>
    </View>
  );
};

export default Delivered;
