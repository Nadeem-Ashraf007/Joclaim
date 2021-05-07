import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Global} from './Components/Global';
import Strings from './pages/LocalizedString';
const getToken = async () => {
  try {
    AsyncStorage.multiGet([
      'accessToken',
      'workshopId',
      'companyid',
      'language',
      'employeeid',
      'parameter',
      'mobileid',
      'appversion',
    ]).then((response) => {
      Global.accessToken = response[0][1];
      Global.workshopId = response[1][1];
      Global.companyid = response[2][1];
      Global.changeView = response[3][1];
      Global.employeeid = response[4][1];
      Global.parameter = response[5][1];
      Global.mobileid = response[6][1];
      Global.appversion = response[7][1];
    });
  } catch (error) {
    console.log('something went wrong' + error);
  }
};

const Splash = ({navigation}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('accessToken').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'drawer'),
      );
      Strings.setLanguage('ar');
    }, 2000);
    getToken();
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('./images/background.png')}>
      {!changeView ? (
        <Text style={styles.imageJoclaims}>جوكليمز</Text>
      ) : (
        <Image
          resizeMode="center"
          resizeMethod="scale"
          style={styles.image}
          source={require('./images/Splash.png')}
        />
      )}
    </ImageBackground>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageJoclaims: {
    marginVertical: '8%',
    // width: '50%',
    fontSize: 45,
    alignSelf: 'center',
    color: 'white',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
