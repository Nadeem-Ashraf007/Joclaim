import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import colors from '../../Constants/colors';
import {Global} from '../../Constants/Global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const OrderParts = () => {
  const [Request, setRequest] = useState([]);
  const [loading, setLoadng] = useState(true);
  useEffect(() => {
    getAccidentDetails();
  }, []);
  const getAccidentDetails = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetSingleRequest?RequestID=' +
          Global.requestid,
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
          if (responseJson.ok) {
            const responce = responseJson;
            setRequest(responce.Request);
            setLoadng(false);
          } else {
            alert('HTTP-Error: ' + response.status);
          }

          // alert(Request.ESignatureURL);
          // alert(responce.RequestedParts[0].AutomotivePartName);
          // setPartDetail(responce.RequestedParts);
          // setPartApprove(responce.PartsApprovedBySignatures);
          //   setAccidentMarker(responce.AccidentMarkers);
          // alert(PartDetail[0].AutomotivePartName);
          //   alert(additionalRequest);

          //   console.log('check itt  ttt' + JSON.stringify(data));
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
    <View style={{marginHorizontal: 10}}>
      <Text style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
        Approval info
      </Text>

      <Image
        style={{width: 200, height: 50, resizeMode: 'cover'}}
        source={{uri: Global.apiurl + Request.ESignatureURL}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>{Request.UserName}</Text>
        <Icon name="check" size={20} />
        <Text>Approved</Text>
      </View>
      <Text>{Request.CreatedOn}</Text>
    </View>
  );
};

export default OrderParts;
