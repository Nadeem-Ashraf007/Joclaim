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
import colors from '../config/colors';
import {Global} from '../Components/Global';
import AccidentDetail from '../Accident/AccidentDetail';
import AccidentNote from '../Accident/AccidentNote';
const UpdateAccident = ({route, style}) => {
  const [data, setdata] = useState([]);
  const [marker, setmarker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [note, setnote] = useState([]);
  const accidentid = route.params.id;

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

          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.text,
                  {marginHorizontal: 5, fontWeight: 'bold'},
                ]}>
                Update Accident
              </Text>
            </View>
          </View>
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
                Accident Type
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
                  Comprehensive
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
                  Third Party Liability
                </Text>
              </View>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Responsibility
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
                  Faulty
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
                  Non-Faulty
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
                  Mutual Responsibility
                </Text>
              </View>

              <Text
                style={{
                  color: colors.primary,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Pricing Type
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
                  pricing and providing
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
                  pricing only
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.text}>Number of Cars involved</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.CarsInvolved}
              </Text>
              <Text style={styles.text}>Accident Happened on</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.AccidentHappendOn}
              </Text>
              <Text style={styles.text}>VIN</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.VIN}
              </Text>
              <Text style={styles.text}>Acccident No</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.AccidentNo}
              </Text>
              <Text style={styles.text}>Vehicle Owner Name</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.VehicleOwnerName}
              </Text>
              <Text style={styles.text}>Model</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.ModelCode}
              </Text>
              <Text style={styles.text}>Year</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.YearCode}
              </Text>
              <Text style={styles.text}>Body Type</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.BodyTypeName}
              </Text>
              <Text style={styles.text}>Cars notes</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.ImportantNote}
              </Text>
              <Text style={styles.text}>Plate No</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.ImportantNote}
              </Text>
              <Text style={styles.text}>Workshop Name</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.PlateNo}
              </Text>

              <Text style={styles.text}>Engine Type</Text>
              <Text style={{borderWidth: 0.5, borderRadius: 10, padding: 5}}>
                {data.EngineTypeName}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={{color: colors.primary, fontSize: 16}}>
        Accident Markers
      </Text>
      <FlatList
        data={marker}
        keyExtractor={(markers) => markers.DamagePointID.toString()}
        renderItem={({item}) => (
          <AccidentDetail
            DamagePointID={item.DamagePointID}
            PointName={item.PointName}
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
        Accident Container
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
    borderTopWidth: 1,
    width: '100%',
    borderTopColor: colors.darkgray,
  },
});

export default UpdateAccident;
