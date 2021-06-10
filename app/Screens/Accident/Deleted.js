import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import CardAccident from './CardAccident';
import colors from '../Constants/colors';
import {fetchUsers} from '../redux/accident/accidentAction';
const Deleted = ({userData, fetchUsers}) => {
  const Delete = userData.users.filter((r) => r.IsDeleted == true);
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
export default connect(mapStateToProps, mapDispatchToProps)(Deleted);
