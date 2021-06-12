import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
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
      {Delete == false ? (
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

            // marginHorizontal: 25,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Record not Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={Delete}
          keyExtractor={(deleted) => deleted.AccidentID.toString()}
          renderItem={({item}) => (
            <CardAccident
              style={styles.card}
              image={item.ImgURL}
              YearCode={item.YearCode}
              ModelCode={item.ModelCode}
              MakeName={item.MakeName}
              ArabicMakeName={item.ArabicMakeName}
              ArabicModelName={item.ArabicModelName}
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
      )}
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
const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Deleted);
