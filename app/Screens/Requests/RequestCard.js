import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../Constants/colors';
import Strings from '../localization/LocalizedString';
import Moment from 'moment';
import {Global} from '../Constants/Global';
const RequestCard = ({
  VehicleOwnerName,
  WorkshopName,
  WorkshopAreaName,
  WorkshopCityName,
  MakeName,
  ModelCode,
  YearCode,
  accidentCreatedBy,
  requestNumber,
  SerialNo,
  FaultyCompanyName,
  CarsInvolved,
  PlateNo,
  AccidentNo,
  VIN,
  BodyTypeName,
  AccidentTypeName,
  ResponsibilityTypeName,
  ImportantNote,
  partDetail,
  additionalAccidentDetail,
  accidentDetail,
  carDetail,
  style,
}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  return (
    <View style={[styles.card, style]}>
      {additionalAccidentDetail && (
        <Text style={styles.headingtext}>Additional Accident Details</Text>
      )}
      {carDetail && (
        <Text style={styles.headingtext}>{Strings.carDetails}</Text>
      )}
      <View style={styles.container}>
        <View
          style={{
            flexDirection: !changeView ? 'row-reverse' : 'row',
            marginBottom: 5,
          }}>
          {/* <Text style={styles.text}>{MakeName}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{ModelCode}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text> */}
        </View>
        {/* <Text style={{fontSize: 15, marginBottom: 5}}>make</Text> */}

        <View style={styles.lastcontainer}>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.VehicleOwnerName}</Text>
            <Text style={styles.innerHeadingText}>{VehicleOwnerName}</Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.WorkshopDetail}</Text>

            <Text style={styles.innerHeadingText}>
              {WorkshopName + WorkshopAreaName + WorkshopCityName}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.carDetails}</Text>
            <Text style={styles.innerHeadingText}>{MakeName + ModelCode}</Text>

            <Text style={{fontSize: 16}}>{YearCode}</Text>
          </View>
          {accidentCreatedBy && (
            <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
              <Text style={styles.innerText}>Accident Created By</Text>
              <Text style={styles.innerHeadingText}>{AccidentCreatedBy}</Text>
            </View>
          )}
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.accidentNumber}</Text>
            <Text style={styles.innerHeadingText}>{AccidentNo}</Text>
          </View>

          {requestNumber && (
            <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
              <Text style={styles.innerText}>Request Number</Text>

              <Text style={styles.innerHeadingText}>{RequestNumber}</Text>
              <Text style={{fontSize: 16}}>/{SerialNo}R</Text>
            </View>
          )}
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.faultyCompanyName}</Text>
            <Text style={styles.innerHeadingText}>{FaultyCompanyName}</Text>
          </View>

          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.numberofCarsInvolved}</Text>
            <Text style={styles.innerHeadingText}>{CarsInvolved}</Text>
          </View>

          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.plateNO}</Text>
            <Text style={styles.innerHeadingText}>{PlateNo}</Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.accidentNumber}</Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {AccidentNo}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.VIN}</Text>
            <Text
              style={{color: colors.black, fontSize: 16, marginHorizontal: 5}}>
              {VIN}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.bodyType}</Text>
            <Text style={styles.innerHeadingText}>{BodyTypeName}</Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.AccidentType}</Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {AccidentTypeName}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.responsibility}</Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {ResponsibilityTypeName}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.workShopName}</Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
              }}>
              {WorkshopName}
            </Text>
          </View>
          <View style={{flexDirection: !changeView ? 'row-reverse' : 'row'}}>
            <Text style={styles.innerText}>{Strings.carNotes}</Text>
            <Text
              style={{
                color: colors.black,
                fontSize: 16,
                marginHorizontal: 5,
                width: '70%',
              }}>
              {ImportantNote}
            </Text>
          </View>
          <View style={{borderBottomWidth: 1}}>
            {accidentDetail && (
              <Text style={styles.headingtext}>Accident Details</Text>
            )}
          </View>
          {partDetail && (
            <Text style={styles.headingtext}>Damage Parts Details</Text>
          )}
        </View>
        {/* <Text>{additionalRequest.RequestedParts[0].AutomotivePartName}</Text> */}
      </View>
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
    // width: '95%',
    marginVertical: '2%',
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
  },
  headingtext: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  innerHeadingText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});
export default RequestCard;
