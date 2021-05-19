import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PaiddetailCard from './PaiddetailCard';
import RequestCard from '../RequestCard';
import colors from '../../Constants/colors';
import {Global} from '../../Constants/Global';
const PaidAccidentDetails = ({route, style}) => {
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
          if (
            responce.RequestedParts !== null &&
            responce.RequestedParts !== 'undefined'
          ) {
            setRequest(responce.RequestedParts);
            setLoadng(false);
          } else {
            alert('HTTP-Error: ' + responce.RequestedParts.status);
          }
        });
    } catch (error) {
      alert(error);
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
      <RequestCard
        VehicleOwnerName={Request.VehicleOwnerName}
        WorkshopName={Request.WorkshopName}
        AccidentCreatedBy={Request.AccidentCreatedBy}
        WorkshopAreaName={Request.WorkshopAreaName}
        WorkshopCityName={Request.WorkshopCityName}
        MakeName={Request.MakeName}
        ModelCode={Request.ModelCode}
        YearCode={Request.YearCode}
        RequestNumber={Request.RequestNumber}
        SerialNo={Request.SerialNo}
        FaultyCompanyName={Request.FaultyCompanyName}
        CarsInvolved={Request.CarsInvolved}
        PlateNo={Request.PlateNo}
        AccidentNo={Request.AccidentNo}
        VIN={Request.VIN}
        BodyTypeName={Request.BodyTypeName}
        AccidentTypeName={Request.AccidentTypeName}
        ResponsibilityTypeName={Request.ResponsibilityTypeName}
        ImportantNote={Request.ImportantNote}
      />
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
