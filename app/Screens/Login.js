import React, {useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import Auth from './navigations/Auth';
import Opacity from './Constants/Opacity';
import colors from './Constants/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Strings from './localization/LocalizedString';
import {Global} from './Constants/Global';
const Login = ({navigation}) => {
  const [email, setemail] = React.useState('wo1@joclaims.com');
  const [password, setPassword] = React.useState('123456');
  const [hidePass, setHidePass] = React.useState(true);
  const [id, setid] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [changeView, setChangeView] = React.useState(Global.changeView);
  // const [state, setstate] = useState(initialState)
  // console.log('nadeem', !changeView);

  const changeLanguage = (value) => {
    Strings.setLanguage(value);
  };

  const toggleFunction = () => {
    if (!changeView) {
      setChangeView(true);
      changeLanguage('en');
    }
    if (changeView) {
      setChangeView(false);
      changeLanguage('ar');
    }
  };
  const mobileid = 64;
  const appversion = 15;
  const companyid = 15;
  const workshopId = 1;
  const storeToken = async (
    accessToken,
    workshopId,
    companyid,
    changeView,
    statusId,
    employeeid,
    accidentid,
    parameter,
    mobileid,
    appversion,
  ) => {
    try {
      await AsyncStorage.multiSet(
        [
          ['accessToken', accessToken],
          ['workshopId', workshopId],
          ['companyid', companyid],
          ['changeView', changeView],
          ['statusId', statusId],
          ['employeeid', employeeid],
          ['accidentid', accidentid],
          ['parameter', parameter],
          ['mobileid', mobileid],
          ['appversion', appversion],
        ],
        (res) => {
          console.log('login store token func:' + res);
        },
      );
    } catch (error) {
      console.log('something went wrong');
    }
  };
  Global.changeView = changeView;
  const ApiUrl = 'https://qapi.joclaims.com/';
  const parameter =
    'csRcUwa-Sq6bDPU2DvtW_m:APA91bHyrpZoeU8PtAkFQjxbJb-LlY20LsxCGArSccfgtjhU05E44d8b7eNxb_BeTZydV8j4MLWTT6LiOn2SVMd3b4LfKpw_NATcrswXNn_m8KQMD6SniZoLXKgfnyMG-e-ShP1no9Xw';

  const Signin = () => {
    fetch(ApiUrl + 'token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:
        'UserName=' +
        email +
        '&Password=' +
        password +
        '&grant_type=password' +
        '&mobileNotificationToken=' +
        parameter +
        '&MobileTypeID=' +
        mobileid +
        '&AppVersion=' +
        appversion,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        JSON.stringify(responseJson);
        if (responseJson.error === undefined) {
          // console.log('login response: ' + JSON.stringify(responseJson));
          // Toast.show('undefined');
          // ApiUrl.RoleID = responseJson.RoleID;
          if (responseJson.RoleID === '11') {
            if (responseJson.StatusID === '2') {
              Toast.show('Login Successful');
              Global.statusId = responseJson.StatusID;
              Global.workshopId = responseJson.ICWorkshopID;
              Global.companyid = responseJson.CompanyID;
              Global.accessToken = responseJson.access_token;
              Global.employeeid = responseJson.EmployeeID;
              Global.accidentid = responseJson.AssidentID;
              AsyncStorage.setItem('accessToken', responseJson.access_token);
              storeToken(
                responseJson.access_token,
                responseJson.ICWorkshopID,
                responseJson.CompanyID,
                responseJson.AssidentID,
              );
              navigation.replace('drawer');
              setLoading(false);
            } else {
              Toast.show('Invalid Login');
              setLoading(false);
            }
          }

          // else if (responseJson.RoleID === '11') {
          //   Toast.show('Login Successful');
          //   navigation.navigate('drawer');
          // }
          else {
            Toast.show('Invalid Login');
            setLoading(false);
          }
        } else {
          Toast.show('Invalid Login Credential');
          setLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  const validate = () => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // let empty = / ^(?:(\d*)(?:\.(\d*))?|\s*)$/;

    if (!reg.test(email)) {
      Toast.show('invalid email');
      setLoading(false);
      return false;
    }
    // if (!regg.test(password)) {
    //   Toast.show('Password is not Correct');
    //   return false;
    // }
    else {
      return true;
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onFocused = (id) => {
    setid(id);
  };

  return (
    <ImageBackground
      style={styles.screen}
      source={require('./images/imageback.png')}>
      <View style={styles.languageContainer}>
        <TouchableOpacity onPress={() => toggleFunction()}>
          <Text style={styles.languagetext}>
            {!changeView ? 'English' : 'العربية'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.outerContainer}>
          <ScrollView>
            {!changeView ? (
              <Text style={styles.imageJoclaims}>جوكليمز</Text>
            ) : (
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require('./images/image.png')}
              />
            )}

            <Text
              style={
                (styles.labelText,
                {
                  marginHorizontal: '7%',
                  color: id == 1 ? 'green' : colors.primary,
                  textAlign: !changeView ? 'right' : 'left',
                })
              }>
              {Strings.emailphone}
            </Text>
            <View
              style={[
                styles.container,
                {
                  flexDirection: !changeView ? 'row-reverse' : 'row',
                  borderColor: id == 1 ? 'green' : colors.primary,
                },
              ]}>
              <TextInput
                // inlineImageLeft="mail"
                textAlign={!changeView ? 'right' : 'left'}
                style={[styles.txtinput, {color: colors.primary}]}
                onChangeText={(email) => setemail(email)}
                autoCorrect={false}
                value={email}
                placeholder={Strings.emailphone}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => onFocused(1)}
                onBlur={() => onFocused(2)}
                // ref={emailInputRef}
                returnKeyType={'next'}
                onSubmitEditing={() => emailInputRef.current.focus()}
              />

              <Icon
                style={styles.icon}
                name="mail"
                size={20}
                color={colors.black}
              />
            </View>
            <Text
              style={
                (styles.labelText,
                {
                  marginHorizontal: '7%',
                  color: id == 3 ? 'green' : colors.primary,
                  textAlign: !changeView ? 'right' : 'left',
                })
              }>
              {Strings.Password}
            </Text>
            <View
              style={[
                styles.container,
                {
                  flexDirection: !changeView ? 'row-reverse' : 'row',
                  borderColor: id == 3 ? 'green' : colors.primary,
                },
              ]}>
              <TextInput
                textAlign={!changeView ? 'right' : 'left'}
                style={[styles.txtinpu, {color: colors.primary}]}
                onFocus={() => onFocused(3)}
                onBlur={() => onFocused(2)}
                onChangeText={(password) => setPassword(password)}
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                secureTextEntry={hidePass ? true : false}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType={'next'}
                onSubmitEditing={() => passwordInputRef.current.focus()}
                ref={emailInputRef}
              />

              <Icon
                name={hidePass ? 'eye-with-line' : 'eye'}
                size={20}
                style={styles.icon}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>

            <View
              style={[
                styles.Opacitycontainer,
                {flexDirection: !changeView ? 'row-reverse' : 'row'},
              ]}>
              <TouchableOpacity
                ref={passwordInputRef}
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.text}>{Strings.forgetpassword}</Text>
              </TouchableOpacity>
            </View>

            {loading ? (
              <ActivityIndicator size="large" color={colors.secondary} />
            ) : (
              <Opacity
                style={styles.opacitymargin}
                title={Strings.loginbutton}
                onPress={() => {
                  setLoading(true);
                  if (validate()) {
                    Signin();
                  }
                  // navigation.replace('drawer');
                }}
              />
            )}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    resizeMode: 'cover',
    // resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: 250,
    // position: 'absolute',
    // height: Dimensions.get('window').height,
    // top: 0,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: '40%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '90%',
    borderRadius: 10,
    // margin: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Opacitycontainer: {
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
    width: '90%',

    justifyContent: 'flex-end',
  },
  txtinput: {
    fontSize: 12,
    width: '85%',
    fontWeight: 'bold',
  },
  txtinpu: {
    fontSize: 12,
    width: '85%',
    fontWeight: 'bold',
  },
  icon: {
    color: colors.primary,
    // flexDirection: 'row',
  },
  image: {
    marginVertical: '10%',
    width: '50%',
    alignSelf: 'center',
  },
  imageJoclaims: {
    marginVertical: '8%',
    // width: '50%',
    fontSize: 45,
    alignSelf: 'center',
    color: colors.primary,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.yellow,
    // alignSelf: 'flex-end',
    // marginHorizontal: '5%',
    // width: '10%',
    // marginRight: '10%',
  },
  opacitymargin: {
    marginVertical: '10%',
  },
  labelText: {
    fontSize: 15,
    color: colors.primary,
    // alignSelf: 'flex-start',

    marginHorizontal: '7%',
  },
  languageContainer: {
    // backgroundColor: colors.opacity,
    alignSelf: 'flex-end',
    margin: 5,
  },
  languagetext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.opacity,
  },
});
export default Login;
