import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Global} from '../Components/Global';
// import CardAccident from '../Parts/CardRequests';
import CardAccident from './CardAccident';
import colors from '../config/colors';
const Opened = ({navigation}) => {
  const [loading, setLoadng] = useState(true);
  const [accident, setAccident] = useState([]);
  const [badge, setbadge] = useState(0);
  Global.badge = badge;
  const [loader, setloader] = useState();

  // const handleDelete = (accident) => {
  //   const newArray = accident.filter(
  //     (acci) => acci.AccidentID == accident.AccidentID,
  //   );
  //   setAccident(newArray);
  // };

  useEffect(() => {
    getData();
  }, [accident]);

  const getData = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetCompanyAccidents?CompanyID=' +
          Global.companyid +
          '&WorkshopID=' +
          Global.workshopId,
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
          const responce = responseJson.Accidents;
          setAccident(responce);
          // alert(responce.AccidentID);

          setbadge(responce.length);
          setLoadng(false);

          // alert('badge' + JSON.stringify(badge));
          // console.log('Nadeem' + JSON.stringify(accident));
          // alert('Nadeem' + JSON.stringify(accident));
          // console.log('Nadeem ' + JSON.stringify(responseJson));
          // setData(responseJson);
          // console.log('global' + Global.companyId);
          // console.log('Request' + JSON.stringify(responseJson));
        });
    } catch (e) {
      alert(e);
    }
  };
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

          borderRadius: 10,
        }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={accident}
        keyExtractor={(accidents) => accidents.AccidentID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) => (
          <CardAccident
            style={styles.card}
            image={item.ImgURL}
            YearCode={item.YearCode}
            ModelCode={item.ModelCode}
            MakeName={item.MakeName}
            WorkshopName={item.WorkshopName}
            AccidentNo={item.AccidentNo}
            accidentTypename={item.AccidentTypeName}
            UserName={item.UserName}
            accidentid={item.AccidentID}
            companyid={item.CompanyID}
            InprogressRequestCount={item.InprogressRequestCount}
            VehicleOwnerName={item.VehicleOwnerName}
            VIN={item.VIN}
            PlateNo={item.PlateNo}
            onPress={() => navigation.navigate('Request')}
            onpress={() =>
              navigation.navigate('OpenAccident', {
                id: item.AccidentID,
              })
            }
            summary={() =>
              navigation.navigate('ClearanceSummary', {
                id: item.AccidentID,
                companyid: item.CompanyID,
              })
            }
            updateAccident={() =>
              navigation.navigate('UpdateAccident', {
                id: item.AccidentID,
              })
            }
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
export default Opened;
