import React from 'react';
import {
  View,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from './config/colors';
import Header from './Components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Opacity from './Components/Opacity';
import Toast from 'react-native-simple-toast';
const ForgetPassword = ({navigation}) => {
  const validate = () => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!reg.test(email)) {
      Toast.show('invalid email');
      return false;
    } else {
      return true;
    }
  };
  const [email, setemail] = React.useState();
  return (
    <ImageBackground
      style={styles.screen}
      source={require('./images/imageback.png')}>
      {/* <Header title="Forget Password" /> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.outerContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('./images/image.png')}
          />

          <View style={styles.container}>
            <TextInput
              style={styles.txtinput}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => setemail(email)}
              value={email}
            />
            <Icon
              name="email"
              size={20}
              style={styles.icon}
              color={colors.primary}
            />
          </View>
          <Opacity
            style={styles.Opacity}
            title="Send Email"
            onPress={() => {
              if (validate()) {
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
    // backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  image: {
    marginVertical: '5%',
    width: '50%',
  },
  txtinput: {
    fontSize: 12,
    width: '85%',
    fontWeight: 'bold',
  },
  Opacity: {
    width: '40%',
  },
});
export default ForgetPassword;
