import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from 'react-native';
import colors from '../Constants/colors';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/request/requestAction';
import CardRequests from '../Requests/CardRequests';
import filter from 'lodash.filter';
const Paid = ({navigation, userData, fetchUser}) => {
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const paid = userData.request.filter((r) => r.StatusID == 17);
  const [data, setData] = useState();
  useEffect(() => {
    fetchUser();
    setData(paid);
    setFullData(paid);
  }, []);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({MakeName, VehicleOwnerName, YearCode}, query) => {
    if (
      MakeName.toLowerCase().includes(query) ||
      VehicleOwnerName.toLowerCase().includes(query) ||
      YearCode.toString().includes(query)
    ) {
      return true;
    }
    return false;
  };

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
      <TextInput
        style={{width: '98%'}}
        value={query}
        onChangeText={(queryText) => handleSearch(queryText)}
        placeholder="Search"
      />
      <FlatList
        data={data}
        ListHeaderComponent={() => handleSearch}
        keyExtractor={(delivers) => delivers.RequestID.toString()}
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
            // viewRequestLog={() =>
            //   navigation.navigate('OpenAccident', {
            //     id: item.AccidentID,
            //   })
            // }
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
    flex: 1,
  },
  card: {
    // height: '65%',
    marginVertical: 5,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Paid);
