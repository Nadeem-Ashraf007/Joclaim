import React from 'react';
import {
  View,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import colors from './Constants/colors';
import Header from './Constants/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Opacity from './Constants/Opacity';
import Toast from 'react-native-simple-toast';
import {Global} from './Constants/Global';
import Strings from './localization/LocalizedString';
const ForgetPassword = ({route}) => {
  const [id, setid] = React.useState(0);
  const validate = () => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!reg.test(email)) {
      Toast.show(Strings.toastInvalidEmail);
      return false;
    } else {
      return true;
    }
  };
  const onFocused = (id) => {
    setid(id);
  };
  const [email, setemail] = React.useState();
  const [changeView, setChangeView] = React.useState(Global.changeView);
  return (
    <ImageBackground
      style={styles.screen}
      source={require('./images/imageback.png')}>
      {/* <Header title="Forget Password" /> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.outerContainer}>
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
            style={[
              styles.labelText,
              {
                textAlign: !changeView ? 'right' : 'left',
                color: id == 1 ? 'green' : colors.primary,
              },
            ]}>
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
              textAlign={!changeView ? 'right' : 'left'}
              style={styles.txtinput}
              onFocus={() => onFocused(1)}
              onBlur={() => onFocused(2)}
              placeholder={Strings.emailphone}
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
            title={Strings.sendemail}
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
    // alignItems: 'center',
  },
  container: {
    // flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%',
    borderRadius: 10,
    margin: 2,
    justifyContent: 'center',
  },
  image: {
    marginVertical: '5%',
    width: '50%',
    alignSelf: 'center',
  },
  txtinput: {
    fontSize: 12,
    width: '87%',
    fontWeight: 'bold',
  },
  Opacity: {
    width: '45%',
    marginVertical: '5%',
  },
  labelText: {
    fontSize: 15,
    color: colors.primary,
    // alignSelf: 'flex-start',
    marginHorizontal: '7%',
  },
  imageJoclaims: {
    marginVertical: '8%',
    // width: '50%',
    fontSize: 45,
    alignSelf: 'center',
    color: colors.primary,
  },
});
export default ForgetPassword;
