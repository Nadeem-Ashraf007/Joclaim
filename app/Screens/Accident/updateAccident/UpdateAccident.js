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
import {RadioButton} from 'react-native-paper';
import colors from '../../Constants/colors';
import {Global} from '../../Constants/Global';
import AccidentDetail from './AccidentDetail';
import AccidentNote from '../AccidentNote';
import Moment from 'moment';
import Strings from '../../localization/LocalizedString';
const UpdateAccident = ({route, style}) => {
  const [data, setdata] = useState([]);
  const [marker, setmarker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [note, setnote] = useState([]);
  const accidentid = route.params.id;
  const [changeView, setChangeView] = React.useState(Global.changeView);
  // const companyid = route.params.companyid;
  // alert(text);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
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
          setdata(responce.Accident);
          setmarker(responce.AccidentMarkers);
          setnote(responce.Notes);
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

  // alert(checked);
  return (
    <View style={[styles.card, style]}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          {/* <Image style={styles.imag} source={require('../images/car.jpg')} /> */}

          {/* <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.text,
                  {marginHorizontal: 5, fontWeight: 'bold'},
                ]}>
                {Strings.updateAccident}
              </Text>
            </View>
          </View> */}
        </View>
        <View style={styles.container}>
          <View style={styles.lastcontainer}>
            <View>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                {Strings.accidentType}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Comprehensive"
                  status={
                    data.AccidentTypeName == 'Comprehensive'
                      ? 'checked'
                      : 'unchecked'
                  }
                />
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.comprehensive}
                </Text>
                <RadioButton
                  value="Third Party Liability"
                  status={
                    data.AccidentTypeName == 'Third Party Liability'
                      ? 'checked'
                      : 'unchecked'
                  }
                />

                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.thirdPartyLiability}
                </Text>
              </View>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                {Strings.responsibility}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Faulty"
                  status={
                    data.ResponsibilityTypeName == 'Faulty'
                      ? 'checked'
                      : 'unchecked'
                  }
                />
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.faulty}
                </Text>
                <RadioButton
                  value="Non-Faulty"
                  status={
                    data.ResponsibilityTypeName == 'Non-Faulty'
                      ? 'checked'
                      : 'unchecked'
                  }
                />

                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.nonFaulty}
                </Text>

                <RadioButton
                  value="Mutual Responsibility"
                  status={
                    data.ResponsibilityTypeName == 'Mutual Responsibility'
                      ? 'checked'
                      : 'unchecked'
                  }
                />

                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.mutualResponsibility}
                </Text>
              </View>

              <Text
                style={{
                  color: colors.primary,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                {Strings.pricingType}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="pricing and providing"
                  status={
                    'pricing and providing' == 'pricing and providing'
                      ? 'checked'
                      : 'unchecked'
                  }
                />
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.pricingAndProviding}
                </Text>
                <RadioButton
                  value="pricing Only"
                  status={
                    'pricing Only' == 'Third Party Liability'
                      ? 'checked'
                      : 'unchecked'
                  }
                />

                <Text
                  style={{
                    color: colors.black,
                    fontSize: 15,
                  }}>
                  {Strings.pricingOnly}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.text}>{Strings.numberofCarsInvolved}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.CarsInvolved}
              </Text>
              <Text style={styles.text}>{Strings.accidentHappendOn}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {Moment(data.AccidentHappendOn).format('LL')}
              </Text>
              <Text style={styles.text}>{Strings.VIN}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.VIN}
              </Text>
              <Text style={styles.text}></Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.AccidentNo}
              </Text>
              <Text style={styles.text}>{Strings.VehicleOwnerName}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.VehicleOwnerName}
              </Text>
              <Text style={styles.text}>{Strings.model}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.ModelCode}
              </Text>
              <Text style={styles.text}>{Strings.quotation_Detail_Year}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.YearCode}
              </Text>
              <Text style={styles.text}>{Strings.bodyType}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.BodyTypeName}
              </Text>
              <Text style={styles.text}>{Strings.carNotes}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.ImportantNote}
              </Text>
              {/* <Text style={styles.text}>Plate No</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.ImportantNote}
              </Text> */}
              <Text style={styles.text}>{Strings.plateNO}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.PlateNo}
              </Text>

              <Text style={styles.text}>{Strings.engineType}</Text>
              <Text
                style={[
                  styles.textInput,
                  {textAlign: !changeView ? 'right' : 'left'},
                ]}>
                {data.EngineTypeName}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={{color: colors.primary, fontSize: 16}}>
        {Strings.accidentMarker}
      </Text>
      <FlatList
        data={marker}
        keyExtractor={(markers) => markers.DamagePointID.toString()}
        renderItem={({item}) => (
          <AccidentDetail
            DamagePointID={item.DamagePointID}
            PointName={!changeView ? item.PointNameArabic : item.PointName}
            dissable={item.IsDamage}
          />
        )}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.primary,
        }}>
        {Strings.accidentContainer}
      </Text>

      <FlatList
        data={note}
        keyExtractor={(notes) => notes.NoteID.toString()}
        renderItem={({item}) => <AccidentNote TextValue={item.TextValue} />}
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
    marginTop: '10%',
    alignSelf: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  imag: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  text: {
    color: colors.primary,
    fontSize: 16,
  },
  lastcontainer: {
    // borderTopWidth: 1,
    width: '100%',
    borderTopColor: colors.darkgray,
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
  },
});

export default UpdateAccident;
