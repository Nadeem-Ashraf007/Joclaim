import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Sacreen from './Constants/Sacreen';
import Header from './Constants/Header';
import colors from './Constants/colors';

const History = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Ordered Placed',
      headerTitleAlign: 'center',
      headerBackTitle: '',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4ecdc4',
      },
      headerLeft: () => (
        <View>
          <Icon
            onPress={() => navigation.pop()}
            style={{marginLeft: 5}}
            name="menu"
            size={15}
            color={colors.primary}
          />
        </View>
      ),
      headerRight: () => (
        <View>
          <Icon
            onPress={() => navigation.pop()}
            style={{marginLeft: 5}}
            name="bell"
            size={15}
            color={colors.primary}
          />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <Sacreen style={styles.screen}>
      {/* <Header title="Demands" navigation={navigation} /> */}
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
export default History;
