import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import colors from '../Constants/colors';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/request/requestAction';
import CardRequests from '../Requests/CardRequests';
import {CustomPicker} from 'react-native-custom-picker';
import {Alert} from 'react-native';
const Delivered = ({navigation, userData, fetchUser}) => {
  const Deliver = userData.request.filter((r) => r.StatusID == 11);
  const pickData = userData.request;
  const [ModelCode, setModelCode] = useState('');
  const [vehicleOwner, setvehicleOwner] = useState('');
  const [yearCodepick, setYearCode] = useState([]);
  const [makeNamepick, setmakeNamepick] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState();
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetchUser();

    setFilteredDataSource(Deliver);
    setMasterDataSource(Deliver);
  }, []);
  const makeName = (MakeName) => {
    setmakeNamepick(MakeName);
  };
  const yearCode = (YearCode) => {
    setYearCode(YearCode);
  };
  // alert(yearCodepick);
  // const searchFilterFunction = (text, textt) => {
  //   if ((text, textt)) {
  //     const newData = masterDataSource.filter((item) => {
  //       const itemData =
  //         item.MakeName && item.VehicleOwnerName
  //           ? item.MakeName.toLowerCase() && item.VehicleOwnerName.toLowerCase()
  //           : ''.toLowerCase();

  //       const textData = text.toLowerCase();
  //       return itemData.indexOf(textData) > -1;
  //     });

  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   }
  //   // if (textt) {
  //   //   const newData = masterDataSource.filter((item) => {
  //   //     const itemData = item.VehicleOwnerName
  //   //       ? item.VehicleOwnerName.toLowerCase()
  //   //       : ''.toLowerCase();

  //   //     const textData = textt.toLowerCase();
  //   //     return itemData.indexOf(textData) > -1;
  //   //   });

  //   //   setFilteredDataSource(newData);
  //   //   setQuery(textt);
  //   // }
  //   else {
  //
  //     setQuery(textt);
  //     setSearch(text);
  //     setFilteredDataSource(masterDataSource);
  //   }
  // };
  const searchFilter = (
    yearCodepick,
    makeNamepick,
    // ModelCode,
    // vehicleOwner,
  ) => {
    if (yearCodepick && makeNamepick) {
      alert(yearCodepick);
      alert(makeNamepick);
      const newData = masterDataSource.filter(
        (item) =>
          // item.ModelCode.toLowerCase() == ModelCode.toLowerCase() &&
          // item.VehicleOwnerName.toLowerCase() == vehicleOwner.toLowerCase() &&
          item.MakeName.toLowerCase() == makeNamepick.toLowerCase() &&
          item.YearCode.toString() == yearCodepick.toString(),
      );

      setFilteredDataSource(newData);
      setModelCode(ModelCode);
    } else if (yearCodepick || makeNamepick) {
      const newData = masterDataSource.filter(
        (item) =>
          // item.ModelCode.toLowerCase() == ModelCode.toLowerCase() ||
          // item.VehicleOwnerName.toLowerCase() == vehicleOwner.toLowerCase() ||
          item.MakeName.toLowerCase() == makeNamepick.toLowerCase() ||
          item.YearCode.toString() == yearCodepick.toString(),
      );

      setFilteredDataSource(newData);

      // setSearch('');
      // setQuery('');
    } else {
      setFilteredDataSource(masterDataSource);
    }
  };

  //
  const ItemView = ({item}) => {
    return (
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
        // viewQutationsummary={() =>
        //   navigation.navigate('DeliveredQutation', {
        //     demandId: item.DemandID,
        //     userid: item.UserID,
        //   })
        // }
        // printAllOffers={() =>
        //   navigation.navigate('OpenAccident', {
        //     id: item.AccidentID,
        //   })
        // }
        // viewRequestLog={() =>
        //   navigation.navigate('OpenAccident', {
        //     id: item.AccidentID,
        //   })
        // }
      />
    );
  };
  // const getItem = (item) => {
  //   // Function for click on an item
  //   alert(item.MakeName, item.YearCode);
  // };
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
      <View style={{flexDirection: 'row'}}>
        <CustomPicker
          options={pickData}
          placeholder="MakeName"
          getLabel={(item) => item.MakeName}
          onValueChange={(value) => {
            value ? makeName(value.MakeName) : setmakeNamepick('');
          }}
        />
        <CustomPicker
          options={pickData}
          placeholder="yearCode"
          getLabel={(item) => item.YearCode}
          onValueChange={(value) => {
            value ? yearCode(value.YearCode) : setYearCode('');
          }}
        />
      </View>

      {/* <TextInput
        style={styles.textInputStyle}
        onChangeText={(ModelCode) => setModelCode(ModelCode)}
        value={ModelCode}
        underlineColorAndroid="transparent"
        placeholder="Model code"
      />

      <TextInput
        style={styles.textInputStyle}
        onChangeText={(vehicleOwner) => setvehicleOwner(vehicleOwner)}
        value={vehicleOwner}
        underlineColorAndroid="transparent"
        placeholder="Search vehicle owner"
      /> */}
      <Button
        title="search"
        onPress={() => searchFilter(yearCodepick, makeNamepick)}
        // disabled={
        //   vehicleOwner.length == 0 &&
        //   ModelCode.length == 0 &&
        //   yearCodepick.length == 0
        // }
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(delivers) => delivers.RequestID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
        renderItem={ItemView}
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
    width: '98%',
    marginVertical: 5,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    width: '98%',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Delivered);
