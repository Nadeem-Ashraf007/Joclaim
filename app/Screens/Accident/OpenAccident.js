import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import Moment from 'moment';
import AccidentDetail from '../Accident/updateAccident/AccidentDetail';
import RequestCard from '../Requests/RequestCard';
// import UCard from '../UserCard';
const OpenAccident = ({navigation, route, style, MakeName}) => {
  const [data, setdata] = useState([]);
  const [marker, setMarker] = useState([]);
  const [loading, setLoadng] = useState(true);
  const accidentid = route.params.id;
  const companyid = route.params.companyid;
  // alert(companyid);

  useEffect(() => {
    getAccidentDetails();
  }, []);
  const getAccidentDetails = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetSingleAccident?AccidentID=' +
          accidentid,
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
          if (responce.Accident !== null && responce.Accident !== 'undefined') {
            setdata(responce.Accident);
            setMarker(responce.AccidentMarkers);
            setLoadng(false);
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <View style={[styles.card, style]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.imag}
          source={{uri: Global.apiurl + data.ImgURL}}
        />

        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.text, {marginHorizontal: 5}]}>
              {data.MakeName}
            </Text>
            <Text style={styles.text}>{data.ModelCode}</Text>
            <Text style={[styles.text, {marginHorizontal: 5}]}>
              {data.YearCode}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 15,

                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              Created By:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {data.UserName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 15,

                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              Accident Happened:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5, width: '27%'}}>
              {Moment(data.AccidentHappendOn).format('LL')}
            </Text>
          </View>
        </View>
      </View>
      <RequestCard
        VehicleOwnerName={data.VehicleOwnerName}
        WorkshopName={data.WorkshopName}
        AccidentCreatedBy={data.AccidentCreatedBy}
        WorkshopAreaName={data.WorkshopAreaName}
        WorkshopCityName={data.WorkshopCityName}
        MakeName={data.MakeName}
        ModelCode={data.ModelCode}
        YearCode={data.YearCode}
        SerialNo={data.SerialNo}
        FaultyCompanyName={data.FaultyCompanyName}
        CarsInvolved={data.CarsInvolved}
        PlateNo={data.PlateNo}
        AccidentNo={data.AccidentNo}
        VIN={data.VIN}
        BodyTypeName={data.BodyTypeName}
        AccidentTypeName={data.AccidentTypeName}
        ResponsibilityTypeName={data.ResponsibilityTypeName}
        ImportantNote={data.ImportantNote}
      />

      <Text
        style={{
          color: colors.primary,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        Markers
      </Text>

      <FlatList
        // inverted
        data={marker}
        keyExtractor={(markers) => markers.DamagePointID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) => (
          <AccidentDetail
            dissable={item.IsDamage}
            DamagePointID={item.DamagePointID}
            PointName={item.PointName}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
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

export default OpenAccident;
