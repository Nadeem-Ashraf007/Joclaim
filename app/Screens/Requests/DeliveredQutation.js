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
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import RequestCard from '../Requests/RequestCard';
import PaiddetailCard from '../Requests/accidentDetails/PaiddetailCard';
// import CardAccident from '../Accident/CardAccident';
const DeliveredQutation = ({navigation, route}) => {
  const [data, setdata] = useState([]);
  const [requestedPart, setrequestedPart] = useState([]);
  const [loading, setLoading] = useState(true);
  const demandId = route.params.demandId;
  const userid = route.params.userid;
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetQuotationSummary?DemandID=' +
          demandId +
          '&UserID=94',
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
          setLoading(false);
          setdata(responce.Request);
          setrequestedPart(responce.RequestedParts);
          alert(requestedPart);
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
    <View style={styles.mainContainer}>
      <RequestCard
        VehicleOwnerName={data.VehicleOwnerName}
        WorkshopName={data.WorkshopName}
        AccidentCreatedBy={data.AccidentCreatedBy}
        WorkshopAreaName={data.WorkshopAreaName}
        WorkshopCityName={data.WorkshopCityName}
        MakeName={data.MakeName}
        ModelCode={data.ModelCode}
        YearCode={data.YearCode}
        RequestNumber={data.RequestNumber}
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
      {/* <FlatList
        data={requestedPart}
        initialNumToRender={10}
        renderItem={({item}) => (
        
        )}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
});
export default DeliveredQutation;
