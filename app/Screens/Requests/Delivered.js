import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../Constants/colors';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/request/requestAction';
import CardRequests from '../Requests/CardRequests';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Delivered = ({navigation, userData, fetchUser}) => {
  const Deliver = userData.request.filter((r) => r.StatusID == 11);
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  ) : userData.error ? (
    <Text>{userData.error}</Text>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={Deliver}
        keyExtractor={(delivers) => delivers.RequestID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) => (
          <CardRequests
            style={styles.card}
            image={item.ImgURL}
            ready
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
            POTotalAmount={item.POTotalAmount}
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
            viewQutationsummary={() =>
              navigation.navigate('OpenAccident', {
                id: item.AccidentID,
              })
            }
            printAllOffers={() =>
              navigation.navigate('OpenAccident', {
                id: item.AccidentID,
              })
            }
            viewRequestLog={() =>
              navigation.navigate('OpenAccident', {
                id: item.AccidentID,
              })
            }
          />
        )}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.reques,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    // height: '65%',
    marginVertical: 5,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Delivered);
