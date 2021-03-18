import React, {useRef} from 'react';
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
} from 'react-native';
import Opacity from './Components/Opacity';
import colors from './config/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [email, setemail] = React.useState();
  const [password, setPassword] = React.useState();
  const [hidePass, setHidePass] = React.useState(true);
  const [name, setname] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const ApiUrl = 'https://qaapi.joclaims.com/';
  const parameter =
    'csRcUwa-Sq6bDPU2DvtW_m:APA91bHyrpZoeU8PtAkFQjxbJb-LlY20LsxCGArSccfgtjhU05E44d8b7eNxb_BeTZydV8j4MLWTT6LiOn2SVMd3b4LfKpw_NATcrswXNn_m8KQMD6SniZoLXKgfnyMG-e-ShP1no9Xw';
  const Signin = async () => {
    // alert(1);
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
        64 +
        '&AppVersion=' +
        15,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        JSON.stringify(responseJson);
        if (responseJson.error === undefined) {
          console.log('login response: ' + JSON.stringify(responseJson));
          // Toast.show('undefined');
          // ApiUrl.RoleID = responseJson.RoleID;
          if (responseJson.RoleID === '11') {
            if (responseJson.StatusID === '2') {
              Toast.show('Login Successful');
              AsyncStorage.setItem('user_id', responseJson.email);
              console.log('nadeem', responseJson.email);
              navigation.navigate('drawer');
              // setLoading(false);
            } else {
              Toast.show('Invalid Login');
              // setLoading(false);
            }
          }
          // else if (responseJson.RoleID === '11') {
          //   Toast.show('Login Successful');
          //   navigation.navigate('drawer');
          // }
          else {
            Toast.show('Invalid Login');
          }
        } else {
          Toast.show('Invalid Login Credential');
        }
      })
      .catch((error) => {
        alert(3);
      });
  };

  const validate = () => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // let empty = / ^(?:(\d*)(?:\.(\d*))?|\s*)$/;

    if (!reg.test(email)) {
      Toast.show('invalid email');
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
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={styles.screen}
        source={require('./images/imageback.png')}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.outerContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('./images/image.png')}
            />

            <View style={styles.container}>
              <TextInput
                style={styles.txtinput}
                onChangeText={(email) => setemail(email)}
                autoCorrect={false}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                // ref={emailInputRef}
                returnKeyType={'next'}
                onSubmitEditing={() => emailInputRef.current.focus()}
              />
              <Icon
                name="mail"
                size={20}
                style={styles.icon}
                color={colors.black}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.txtinput}
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

            <View style={styles.Opacitycontainer}>
              <TouchableOpacity
                ref={passwordInputRef}
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.text}>Forget password?</Text>
              </TouchableOpacity>
            </View>

            <Opacity
              title="Login"
              onPress={() => {
                if (validate()) {
                  Signin();
                }
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: '50%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '90%',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  Opacitycontainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',

    // justifyContent: 'center',
  },
  txtinput: {
    fontSize: 12,
    width: '85%',
    fontWeight: 'bold',
  },
  icon: {
    color: colors.primary,
  },
  image: {
    marginVertical: '10%',
    width: '50%',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.yellow,
    // width: '40%',
    marginRight: '6%',
  },
});
export default Login;
