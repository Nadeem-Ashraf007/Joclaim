import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/accident/accidentAction';
import CardAccident from './CardAccident';
import colors from '../Constants/colors';
const Closed = ({userData, fetchUsers, navigation}) => {
  const close = userData.users.filter((r) => r.StatusID == 21);
  useEffect(() => {
    fetchUsers();
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
    <View>
      <FlatList
        data={close}
        keyExtractor={(close) => close.AccidentID.toString()}
        renderItem={({item}) => (
          <CardAccident
            style={{marginVertical: 5}}
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
              navigation.navigate('UpdateAccidents', {
                params: {
                  id: item.AccidentID,
                },
                screen: 'UpdateAccident',
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
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Closed);
