import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../Constants/colors';
// import {
//   ImagePicker,
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';
const UploadImage = () => {
  const takePics = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      multiple: true,
    }).then((response) => {
      let tempArray = [];
      console.log('responseimage-------' + response);
      setFilePath({ImageSource: response});
      console.log('responseimagearray' + filePath.ImageSource);
      response.forEach((item) => {
        let image = {
          uri: item.path,
          width: item.width,
          height: item.height,
        };

        console.log('imagpath==========' + image);
        tempArray.push(image);
        setFilePath({ImageSourceviewarray: tempArray});
        console.log('savedimageuri=====' + item.path);
        console.log('imagpath==========' + image);
      });
    });
  };
  const [filePath, setFilePath] = useState({});

  return (
    <View style={{flexDirection: 'column'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => takePics('image')}>
        <Text style={styles.textStyle}>Upload image</Text>
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
