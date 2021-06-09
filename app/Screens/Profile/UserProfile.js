import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';
import Strings from '../localization/LocalizedString';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
        updateProfile(response);
      }
    });
  };
  useEffect(() => {
    (async () => {
      getData();
    })();
  }, []);

  const updateProfile = async (response) => {
    var formData = new FormData();
    formData.append('OriginalName,imageDataUrl', {
      uri: response.uri.replace('file://', ''),
      name: 'image-name.png',
      type: 'image/png', // it may be necessary in Android.
    });
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/SaveICUserProfile',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            authorization: Global.accessToken
              ? `Bearer ${Global.accessToken}`
              : '',
          },
        },
        {formData},
      )
        .then((response) => response.json())
        .then((response) => {
          console.log('upload succes', response);
          alert('Upload success!');
        })
        .catch((error) => {
          console.log('upload error', error);
          alert('Upload failed!');
        });
    } catch (e) {
      alert(e.message);
    }
  };

  const getData = async () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetEmployeeMeta?CompanyID=' +
          Global.companyid +
          '&EmployeeID=' +
          Global.employeeid,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: Global.accessToken
              ? `Bearer ${Global.accessToken}`
              : '',
          },
        },
      )
        .then((response) => response.json())
        .then((responseJson) => {
          const responce = responseJson.EmployeeObj;
          if (responce !== null && responce !== 'undefined') {
            setProfile(responce);
            console.log('Profile', responce);
            setloading(false);
          } else {
            alert('HTTP-Error: ' + responce.Accident.status);
          }
        });
    } catch (e) {
      alert(e);
    }
  };
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Data not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleChoosePhoto}>
          {photo ? (
            <Image style={styles.img} source={{uri: photo.uri}} />
          ) : (
            <Image
              style={styles.img}
              source={{uri: Global.apiurl + profile.ImgURL}}
            />
          )}
        </TouchableOpacity>
        {/* <UploadImage /> */}
        <View style={{alignItems: 'flex-start', marginBottom: 5}}>
          <Text style={styles.text}>{Strings.workshopOwner}</Text>
          <Text style={{fontSize: 17}}>{profile.FirstName}</Text>
          <Text style={styles.text}>{Strings.phone}</Text>
          <Text style={{fontSize: 17}}>{profile.PhoneNumber}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{Strings.email}</Text>
            <Icon
              name="checkbox-marked-circle"
              color={colors.primary}
              size={20}
            />
          </View>

          <Text style={{fontSize: 17}}>{profile.Email}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{Strings.esignature}</Text>
            <Icon name="rename-box" color={colors.primary} size={20} />
          </View>
          <Image
            style={styles.sign}
            source={{uri: Global.apiurl + profile.ESignatureURL}}
          />
        </View>
      </View>
      <Text style={styles.text}>{Strings.employeePermisions}</Text>

      <View style={{flexDirection: 'row'}}>
        <Icon
          name="stop"
          color={colors.primary}
          style={{borderRadius: 10}}
          size={20}
        />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.addaccidentParts}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="stop" color={colors.primary} size={20} />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.receiveParts}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="stop" color={colors.primary} size={20} />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.repairCar}
        </Text>
      </View>
      {/*  */}
    </View>
    // <View style={styles.container}>
    //   <UserCard
    //     style={styles.card}
    //     Email={profile.Email}
    //     PhoneNumber={profile.PhoneNumber}
    //     FirstName={profile.FirstName + profile.LastName}
    //     image={profile.ImgURL}
    //     signature={profile.ESignatureURL}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 40,
  },
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: '5%',
    top: -40,
    backgroundColor: colors.black,
  },
  sign: {
    width: 100,
    height: 45,
    resizeMode: 'cover',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.TITLE,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});
export default UserProfile;
