import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Constants/colors';
import Strings from '../../localization/LocalizedString';
import {
  ImagePicker,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const UploadImage = () => {
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    ImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };
  const [filePath, setFilePath] = useState({});

  return (
    <View style={{flexDirection: 'column'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile('photo')}>
        <Text style={styles.textStyle}>{Strings.uploadImage}</Text>
      </TouchableOpacity>
      <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
      {/* <Text style={styles.textStyle}>{filePath.uri}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
    color: colors.white,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.opacity,
    justifyContent: 'center',
    borderRadius: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
export default UploadImage;
