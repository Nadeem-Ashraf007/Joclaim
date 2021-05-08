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
import AccidentDetail from './AccidentDetail';

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
          setdata(responce.Accident);
          setMarker(responce.AccidentMarkers);
          setLoadng(false);
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
              {data.AccidentHappendOn}
            </Text>
          </View>
        </View>
      </View>
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
              {data.VehicleOwnerName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Engine Type:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {data.EngineTypeName}
            </Text>
          </View>
          {/* <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Car Details:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {data.MakeName}
            </Text>
          </View> */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Number of Cars Involved:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {data.CarsInvolved}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Plate No:
            </Text>
            <Text style={{color: colors.TextValue, fontSize: 15}}>
              {data.PlateNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident Number:
            </Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {data.AccidentNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              VIN:
            </Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {data.VIN}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Body Type:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {data.BodyTypeName}
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
              {data.AccidentTypeName}
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
              {data.ResponsibilityTypeName}
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
              {data.WorkshopName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Faulty Company Name:
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {data.FaultyCompanyName}
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
              {data.ImportantNote}
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
            Markers
          </Text>
          {/* <Text>{marker.PointName}</Text> */}
          {/* <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Car's notes:
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {data.AccidentTypeName}
            </Text>
          </View> */}
        </View>
      </View>
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
