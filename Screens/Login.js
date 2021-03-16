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
} from 'react-native';
import Opacity from './Components/Opacity';
import colors from './config/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';

const Login = ({navigation}) => {
  const [email, setemail] = React.useState();
  const [password, setPassword] = React.useState();
  const [hidePass, setHidePass] = React.useState(true);
  const [name, setname] = React.useState();
  const [indicator, setIndicator] = React.useState(false);

  // const Signin = async () => {
  //   try {
  //     const response = await axios.post('http://192.168.10.17:3000/api/todo', {
  //       email: email,
  //       password: password,
  //     });
  //     if (response.status == 200) {
  //       navigation.navigate('home');
  //     } else {
  //       alert('invalid credentials');
  //     }
  //     console.log('this is response: ', response);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  const validate = () => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!reg.test(email)) {
      Toast.show('invalid email');
      return false;
    }
    if (!regg.test(password)) {
      Toast.show('Password is not Correct');
      return false;
    } else {
      return true;
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  return (
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
                navigation.navigate('drawer');
                // Signin()
              }
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
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
