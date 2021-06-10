import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import colors from '../../Constants/colors';
import {Global} from '../../Constants/Global';
import AccidentDetail from './AccidentDetail';
import AccidentNote from '../AccidentNote';
import {CustomPicker} from 'react-native-custom-picker';
import Moment from 'moment';
import Strings from '../../localization/LocalizedString';
import WorkshhopFinding from './WorkshhopFinding';
const UpdateAccident = ({route, style}) => {
  const [data, setdata] = useState({});
  const [marker, setmarker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [note, setnote] = useState([]);
  const [workShopFind, setworkShopFind] = useState([]);
  const [quantity, setquantity] = useState('1');
  const [Note, setNote] = useState();
  const [ConditionTypeName, setConditionTypeName] = useState();
  const [NewPartConditionTypeName, setNewPartConditionTypeName] = useState();
  const [picker, setpicker] = useState();
  const [pickerAutoID, setpickerAutoID] = useState();
  const [photo, setPhoto] = React.useState([]);
  const accidentid = route.params.id;
  const [changeView, setChangeView] = React.useState(Global.changeView);
  const [accidentPart, setAccidentPart] = useState([]);
  const [accidentPartImages, setaccidentPartImages] = useState([]);
  const [accidentImages, setAccidentImages] = useState([]);
  const [stNewPartConditionTypeIDate, setNewPartConditionTypeID] = useState();
  // const handlePicker = (PartName, AutomotivePartID) => {};

  const addParts = () => {
    setAccidentPart((prevstate) => {
      return [
        ...prevstate,
        {
          AccidentPartID: -722,
          ConditionTypeID: 1,
          ImageRef: -722,
          IsEdit: false,
          NewPartConditionTypeID: 10,
          AutomotivePartID: pickerAutoID,
          AutomotivePartName: picker,
          Quantity: quantity,
          ConditionTypeName: ConditionTypeName,
          NewPartConditionTypeName: NewPartConditionTypeName,
          NoteInfo: Note,
        },
      ];
    });
  };
  // const deleteParts = (id) => {
  //   const deletePart = acciden.filter((r) => r.id != id);
  //   setAccidentPart(deletePart);
  //   console.log(deletePart);
  // };
  // alert(pickerAutoID);
  // console.log(picker);

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
    getData();
    getWorkshopName();
  }, []);

  const getWorkshopName = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetAccidentMetaData?CompanyID=15',
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
          const responce = responseJson.AutomotivePart.filter(
            (r) => r.AutomotivePartID < 98,
          );
          setworkShopFind(responce);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };
  console.log('tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnn', Global.accessToken);
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
          setAccidentPart(responce.AccidentParts);
          setAccidentImages(responce.AccidentImages);
          setaccidentPartImages(responce.AccidentPartsImages);

          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };

  const updataAccident = () => {
    try {
      fetch('https://qapi.joclaims.com/api/Company/UpdateAccident', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: Global.accessToken
            ? `Bearer ${Global.accessToken}`
            : '',
        },
        body: JSON.stringify({
          Accident: data,
          AccidentImages: accidentImages,
          AccidentMarkers: marker,
          AccidentParts: accidentPart,
          AccidentPartsImages: accidentPartImages,
          AccidentNotes: note,
          ObjectTypes: null,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('upload succes', JSON.stringify(responseJson));
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

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  // alert(checked);
  return (
    <ScrollView>
      <View style={[styles.card, style]}>
        {/* <WorkshhopFinding /> */}
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
                <Text style={styles.text}>{Strings.quotationDetailYear}</Text>
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

        {marker.map((mark, i) => (
          <AccidentDetail
            DamagePointID={mark.DamagePointID}
            PointName={!changeView ? mark.PointNameArabic : mark.PointName}
            dissable={mark.IsDamage}
          />
        ))}

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          {Strings.accidentContainer}
        </Text>

        {note.map((notes, i) => (
          <AccidentNote TextValue={notes.TextValue} />
        ))}

        <View
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            WorkShop Find
          </Text>
          {/* //Workshop finding View */}
          <CustomPicker
            placeholder={Strings.name}
            options={workShopFind}
            getLabel={(item) => item.PartName}
            onValueChange={(value) => {
              value ? JSON.stringify(value) : 'No item were selected!';
              setpicker(value.PartName);
              setpickerAutoID(value.AutomotivePartID);
            }}
          />
          <Text style={styles.text}>{Strings.quantity}</Text>
          <TextInput
            // defaultValue={quantity}
            // defaultValue={'quantity'}
            style={styles.textinputWorkshop}
            onChangeText={(quantity) => setquantity(quantity)}
            value={quantity}
            textAlign={!changeView ? 'right' : 'left'}
          />
          <Text style={styles.text}>{Strings.condition}</Text>
          <View style={{alignItems: 'flex-start'}}>
            <View
              style={{
                flexDirection: !changeView ? 'row-reverse' : 'row',
                alignItems: 'center',
              }}>
              <Text>{Strings.new}</Text>
              <RadioButton
                value="New"
                status={ConditionTypeName === 'New' ? 'checked' : 'unchecked'}
                onPress={() => setConditionTypeName('New')}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{Strings.used}</Text>
                <RadioButton
                  value="Used"
                  status={
                    ConditionTypeName === 'Used' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setConditionTypeName('Used')}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{Strings.any}</Text>
                <RadioButton
                  value="Any"
                  status={ConditionTypeName === 'Any' ? 'checked' : 'unchecked'}
                  onPress={() => setConditionTypeName('Any')}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{Strings.original}</Text>
              <RadioButton
                value="Origional"
                status={
                  NewPartConditionTypeName === 'Origional'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setNewPartConditionTypeName('Origional')}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{Strings.afterMarket}</Text>
                <RadioButton
                  value="Aftermarket"
                  status={
                    NewPartConditionTypeName === 'Aftermarket'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => setNewPartConditionTypeName('Aftermarket')}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{Strings.any}</Text>
                <RadioButton
                  value="Any"
                  status={
                    NewPartConditionTypeName === 'Any' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setNewPartConditionTypeName('Any')}
                />
              </View>
            </View>
          </View>
          <TextInput
            // defaultValue={quantity}
            placeholder={Strings.note}
            style={styles.textinputWorkshop}
            onChangeText={(note) => setNote(note)}
            value={note}
            textAlign={!changeView ? 'right' : 'left'}
          />
          <TouchableOpacity onPress={handleChoosePhoto}>
            {photo ? (
              <Image style={styles.img} source={{uri: photo.uri}} />
            ) : (
              <Image
                style={styles.img}
                source={{uri: Global.apiurl + workShopFind.ImageURL}}
              />
            )}
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.opacity} onPress={addParts}>
              <Text style={styles.opacityText}>{Strings.addparts}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity}>
              <Text style={styles.opacityText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.opacity, {marginTop: 10}]}
              onPress={updataAccident}>
              <Text style={styles.opacityText}>Update</Text>
            </TouchableOpacity>
          </View>
          {accidentPart.map((accident) => (
            <View>
              <Text>{accident.AutomotivePartName}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{accident.ConditionTypeName}</Text>
                <Text>{accident.NewPartConditionTypeName}</Text>
              </View>
              <Text>{accident.Quantity}</Text>
              <Text>{accident.NoteInfo}</Text>
              {/* <Text>{accident.NewPartConditionTypeID}</Text> */}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
  text: {
    color: colors.primary,
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  textinputWorkshop: {
    borderWidth: 0.5,
    borderRadius: 10,
  },
  opacityText: {
    color: colors.white,
  },
  opacity: {
    backgroundColor: colors.opacity,
    borderRadius: 5,
    padding: 8,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: '5%',
  },
});

export default UpdateAccident;
