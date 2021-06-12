import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Global} from './Constants/Global';
import Strings from './localization/LocalizedString';
import {fcmService} from '../Screens/PushNotification/FCMService';
import {localNotificationService} from '../Screens/PushNotification/LocalNotificationService';
import colors from './Constants/colors';
import {View} from 'react-native';
const getToken = () => {
  try {
    AsyncStorage.multiGet([
      'accessToken',
      'workshopId',
      'companyid',
      'statusId',
      'employeeId',
      'changeLanguage',
      'languageChange',
    ]).then((response) => {
      Global.accessToken = response[0][1];
      Global.workshopId = response[1][1];
      Global.companyid = response[2][1];
      Global.statusId = response[3][1];
      Global.employeeid = response[4][1];
      Global.changeView = JSON.parse(response[5][1]);
      Global.changeLanguage = JSON.parse(response[6][1]);
      debugger;
      if (Global.changeView == true) {
        Strings.setLanguage('en');
      } else {
        Strings.setLanguage('ar');
      }
    });
  } catch (error) {
    console.log('something went wrong' + error);
  }
};
debugger;
// AsyncStorage.getItem('languageChange').then((value) =>
//   JSON.parse(value) == true
//     ? Strings.setLanguage('en')
//     : Strings.setLanguage('ar'),
// );

debugger;
const Splash = ({navigation}) => {
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

  useEffect(() => {
    debugger;
    // getLanguage();
    getToken();
    setTimeout(() => {
      navigation.replace(Global.accessToken == null ? 'Auth' : 'drawer');
    }, 3000);
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('./images/background.png')}>
      {Global.changeView == true ? (
        <Image
          resizeMode="center"
          resizeMethod="scale"
          style={styles.image}
          source={require('./images/Splash.png')}
        />
      ) : (
        <Text style={styles.imageJoclaims}>جوكليمز</Text>
      )}
      {Global.changeView == true ? (
        <View style={{flexWrap: 'wrap'}}>
          <Text style={styles.textEnglish}>Automated solutions for auto</Text>
          <Text style={styles.textEnglish}>insurance accident claims.</Text>
        </View>
      ) : (
        <Text style={styles.text}>حلول إلكترونية لمطالبات شركات التأمين</Text>
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
  textEnglish: {
    color: colors.white,
    fontSize: 20,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
