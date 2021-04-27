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
const Deleted = () => {
  const [loading, setLoadng] = useState(true);
  const [Delete, setDelete] = useState([]);
  const [Deletebadge, setDeletebadge] = useState(0);

  useEffect(() => {
    Global.Deletebadge = Deletebadge;
  });
  useEffect(() => {
    getData();
  }, []);
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
          const responce = responseJson.Accidents.filter(
            (r) => r.IsDeleted == true,
          );
          setDelete(responce);
          setDeletebadge(responce.length);
          setLoadng(false);
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
        data={Delete}
        keyExtractor={(deleted) => deleted.AccidentID.toString()}
        renderItem={({item}) => (
          <CardAccident
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
            // onPress={() => navigation.navigate('Request')}
            // onpress={() =>
            //   navigation.navigate('OpenAccident', {
            //     id: item.AccidentID,
            //   })
            // }
            // summary={() =>
            //   navigation.navigate('ClearanceSummary', {
            //     id: item.AccidentID,
            //     companyid: item.CompanyID,
            //   })
            // }
            // updateAccident={() =>
            //   navigation.navigate('UpdateAccidents', {
            //     params: {
            //       id: item.AccidentID,
            //     },
            //     screen: 'UpdateAccident',
            //   })
            // }
          />
        )}
      />
    </View>
  );
};

export default Deleted;
