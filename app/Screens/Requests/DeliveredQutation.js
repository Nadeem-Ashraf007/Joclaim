import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import CardAccident from '../Accident/CardAccident';
const DeliveredQutation = (navigation, route) => {
  const [data, setdata] = useState([]);
  const [marker, setmarker] = useState([]);
  const [loading, setLoading] = useState(true);
  const demandId = route.params.demandId;
  const userid = route.params.userid;

  //   alert(UserId);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      fetch(
        ' https://qapi.joclaims.com/api/Company/GetQuotationSummary?DemandID=' +
          demandId,
        '&UserID=' + userid,
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
          const responce = responseJson;
          setdata(responce.Request);
          //   setmarker(responce.AccidentMarkers);
          //   setnote(responce.Notes);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <CardAccident AccidentNo={item.AccidentNo} />}
      />
    </View>
  );
};

export default DeliveredQutation;
