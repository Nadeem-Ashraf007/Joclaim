import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';
import UserCard from './UserCard';
const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    (async () => {
      getData();
    })();
  }, []);
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
    <View style={styles.container}>
      <UserCard
        Email={profile.Email}
        PhoneNumber={profile.PhoneNumber}
        FirstName={profile.FirstName + profile.LastName}
        image={profile.ImgURL}
        signature={profile.ESignatureURL}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  card: {
    width: '98%',
    // height: '40%',
    marginVertical: '30%',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
export default UserProfile;
