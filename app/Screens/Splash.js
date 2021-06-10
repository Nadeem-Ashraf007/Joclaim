import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Global} from './Constants/Global';
import Strings from './localization/LocalizedString';
import {fcmService} from '../Screens/PushNotification/FCMService';
import {localNotificationService} from '../Screens/PushNotification/LocalNotificationService';
import colors from './Constants/colors';

const getToken = async () => {
  try {
    await AsyncStorage.multiGet([
      'accessToken',
      'workshopId',
      'companyid',
      'statusId',
      'employeeId',
    ]).then((response) => {
      debugger;
      Global.accessToken = response[0][1];
      Global.workshopId = response[1][1];
      Global.companyid = response[2][1];
      Global.statusId = response[3][1];
      Global.employeeid = response[4][1];
    });
  } catch (error) {
    console.log('something went wrong' + error);
  }
};

console.log('Checking Storage Compny d ', Global.workshopId, Global.companyid);
const Splash = ({navigation}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  React.useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    async function onRegister(token) {
      console.log('token: ', token);
    }
    function onNotification(notify) {
      const options = {
        soundName: 'default',
        playSound: true,
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }
    function onOpenNotification(notify) {
      console.log('onOpenNotification: ', notify);
    }
    return () => {
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);
  AsyncStorage.getItem('LanguageSet').then(
    (value) => (Global.changeView = value),
  );
  alert(Global.changeView);
  useEffect(() => {
    getToken();
    Strings.setLanguage('ar'),
      setTimeout(() => {
        navigation.replace(Global.accessToken == null ? 'Auth' : 'drawer');
      }, 2000);
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
      {!changeView ? (
        <Text style={styles.text}>حلول إلكترونية لمطالبات شركات التأمين</Text>
      ) : (
        <Text style={styles.text}>
          Automated solutions for auto insurance accident claims.
        </Text>
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
  text: {
    color: colors.white,
    fontSize: 20,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
