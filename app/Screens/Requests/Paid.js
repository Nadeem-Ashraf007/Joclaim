import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import CardRequests from './CardRequests';
import colors from '../Constants/colors';
import Screen from '../Constants/Sacreen';
import {Global} from '../Constants/Global';

const Paid = ({navigation}) => {
  const [Make, setMake] = useState([]);
  const [loading, setLoading] = useState(true);
  const [badgeicon, setBadgeicon] = useState(Global.badgeicon);
  Global.badgeicon = badgeicon;
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetCompanyRequests?CompanyID=' +
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
          const paidResponce = responseJson.Requests.filter(
            (r) => r.StatusID == 17,
          );
          setMake(paidResponce);

          setBadgeicon(paidResponce.length);
          setLoading(false);
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
        }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        {/* <Cards style={styles.card} /> */}
        <FlatList
          data={Make}
          keyExtractor={(makes) => makes.MakeID.toString()}
          initialNumToRender={10}
          // ItemSeparatorComponent={ListItemSeperator}
          renderItem={({item}) => (
            <CardRequests
              style={styles.card}
              image={item.ImgURL}
              YearCode={item.YearCode}
              MakeName={item.MakeName}
              ModelCode={item.ModelCode}
              makename={item.VehicleOwnerName}
              // makename={item.MakeID}
              arabicmakename={item.ArabicMakeName}
              RequestNumber={item.RequestNumber}
              createdon={item.BiddingDateTime}
              AccidentNo={item.AccidentNo}
              WorkshopName={item.WorkshopName}
              BiddingDateTime={item.BiddingDateTime}
              VIN={item.VIN}
              PlateNo={item.PlateNo}
              SerialNo={item.SerialNo}
              RequestRowNumber={item.RequestRowNumber}
              viewRequest={() =>
                navigation.navigate('PaidAccident', {
                  params: {
                    id: item.RequestID,
                  },
                  screen: 'PaidAccidentDetails',
                })
              }
              viewAccident={() =>
                navigation.navigate('OpenAccident', {
                  id: item.AccidentID,
                })
              }
            />
          )}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    // height: '65%',
    // marginVertical: 10,
    justifyContent: 'center',
  },
});
export default Paid;
