import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 1000);
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('./images/background.png')}>
      <Image
        resizeMode="center"
        resizeMethod="scale"
        style={styles.image}
        source={require('./images/Splash.png')}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splash;
