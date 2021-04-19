import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PaiddetailCard from '../Requests/PaiddetailCard';
import colors from '../config/colors';
import {Global} from '../Components/Global';
const PaidAccidentDetails = ({route, style}) => {
  const [additionalRequest, setadditionalRequest] = useState([]);
  const [Request, setRequest] = useState([]);
  const [loading, setLoadng] = useState(true);
  const RequestID = route.params.id;
  Global.requestid = RequestID;
  useEffect(() => {
    getAccidentDetails();
  }, []);

  const getAccidentDetails = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetSingleRequest?RequestID=' +
          RequestID,
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
          setRequest(responce.RequestedParts);
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
    <View style={[styles.card, style]}>
      <Text style={{color: colors.primary, fontSize: 20, fontWeight: 'bold'}}>
        Additional Accident Details
      </Text>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          {/* <Text style={styles.text}>{MakeName}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{ModelCode}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text> */}
        </View>
        {/* <Text style={{fontSize: 15, marginBottom: 5}}>make</Text> */}

        <View style={styles.lastcontainer}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Vehicle Owner Name:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.VehicleOwnerName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Workshop Detail
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.WorkshopName +
                additionalRequest.Request.WorkshopAreaName +
                additionalRequest.Request.WorkshopCityName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Car Details:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.MakeName}
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.ModelCode}
            </Text>
            <Text style={{fontSize: 16}}>
              {additionalRequest.Request.YearCode}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident Created By
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.AccidentCreatedBy}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident No
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.AccidentNo}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Request Number
            </Text>

            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.RequestNumber}
            </Text>
            <Text style={{fontSize: 16}}>/</Text>
            <Text style={{fontSize: 16}}>{additionalRequest.SerialNo}</Text>
            <Text style={{fontSize: 16}}>R</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Faulty Company Name
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.FaultyCompanyName}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Number of Cars Involved
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.CarsInvolved}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Plate No:
            </Text>
            <Text style={{color: colors.TextValue, fontSize: 15}}>
              {additionalRequest.Request.PlateNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident Number:
            </Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.AccidentNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              VIN:
            </Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.VIN}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Body Type:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {additionalRequest.Request.BodyTypeName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident Type:
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {additionalRequest.Request.AccidentTypeName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Responsibility:
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {additionalRequest.Request.ResponsibilityTypeName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Work Shop Name:
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {additionalRequest.Request.WorkshopName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Car notes
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 16,
                marginHorizontal: 5,
                width: '70%',
              }}>
              {additionalRequest.Request.ImportantNote}
            </Text>
          </View>
          <View style={{borderBottomWidth: 1}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Accident Details
            </Text>
          </View>
          <Text
            style={{
              color: colors.primary,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Damage Parts Details
          </Text>
        </View>
        {/* <Text>{additionalRequest.RequestedParts[0].AutomotivePartName}</Text> */}
      </View>
      <FlatList
        // inverted
        data={Request}
        // keyExtractor={(markers) => markers.AccidentID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) => (
          <PaiddetailCard
            AutomotivePartName={item.AutomotivePartName}
            CreatedByName={item.CreatedByName}
            CreatedOn={item.CreatedOn}
            DemandedQuantity={item.DemandedQuantity}
            ESignatureURL={item.ESignatureURL}
            ConditionTypeName={item.ConditionTypeName}
          />
        )}
      />
    </View>
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
    width: '95%',
    marginVertical: '2%',
    alignSelf: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  imag: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  text: {
    color: colors.primary,
    fontSize: 16,
  },
  lastcontainer: {
    borderTopWidth: 1,
    width: '100%',
    borderTopColor: colors.darkgray,
  },
});

export default PaidAccidentDetails;
