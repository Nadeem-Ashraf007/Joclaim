import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from '../../config/colors';
import AccidentDetail from '../../Accident/AccidentDetail';
import {Global} from '../../Components/Global';
const AccidentDetails = ({route, style}) => {
  const [additionalRequest, setadditionalRequest] = useState([]);
  const [Request, setRequest] = useState([]);
  const [loading, setLoadng] = useState(true);
  // const RequestID = route.params.id;

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
          const responce = responseJson;
          // const markers = responseJson.AccidentMarkers;
          setadditionalRequest(responce);
          setRequest(responce.AccidentMarkers);
          // alert(responce.RequestedParts[0].AutomotivePartName);
          // setPartDetail(responce.RequestedParts);
          // setPartApprove(responce.PartsApprovedBySignatures);
          //   setAccidentMarker(responce.AccidentMarkers);
          // alert(PartDetail[0].AutomotivePartName);
          //   alert(additionalRequest);
          setLoadng(false);

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
    <View>
      <Text
        style={{
          fontSize: 20,
          marginHorizontal: 7,
          color: colors.primary,
          fontWeight: 'bold',
        }}>
        Markers
      </Text>
      <FlatList
        // inverted
        data={Request}
        keyExtractor={(markers) => markers.DamagePointID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) => (
          <AccidentDetail
            DamagePointID={item.DamagePointID}
            PointName={item.PointName}
          />
        )}
      />
    </View>
  );
};

export default AccidentDetails;
