import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {fetchUsers} from '../redux/accident/accidentAction';
import CardAccident from '../Accident/CardAccident';
import {CustomPicker} from 'react-native-custom-picker';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';
import {TextInput} from 'react-native';
const AccidentHistoryOpened = ({navigation, userData, fetchUsers}) => {
  const [yearCod, setYearCode] = useState();
  const [yearId, setYearId] = useState(null);
  const [ModelCode, setModelCode] = useState();
  const [ModelId, setModelId] = useState(null);
  const [makeName, setmakeName] = useState();
  const [makeid, setMakeId] = useState(null);
  const [searchAccident, setsearchAccident] = useState([]);
  const [searchQuery, setsearchQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const [Responce, setResponce] = useState([]);
  const [Makes, setMakes] = useState([]);
  const [Models, setModels] = useState([]);
  const [Years, setYears] = useState([]);

  const Model = Models.filter((r) => r.MakeID == makeid);

  useEffect(() => {
    getmetaData();
  }, []);

  //   alert('makeid', makeid);
  //   alert('yearid', yearId);

  const getmetaData = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetAccidentMetaData?CompanyID=' +
          15,
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
          setMakes(responce.Makes);
          setModels(responce.Models);
          setYears(responce.Years);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };

  const getAccidentHistory = () => {
    debugger;
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetCompanyHistoryAccidents?CompanyID=15&WorkshopID=1&StartRow=1&RowsPerPage=8&MakeID=' +
          makeid +
          '&ModelID=' +
          ModelId +
          '&YearID=' +
          yearId +
          '&searchQuery=' +
          searchQuery,
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
          debugger;
          const responce = responseJson;
          setsearchAccident(responce.Accidents);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };
  debugger;
  //   if (loading) {
  //     return (
  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //         <ActivityIndicator size="large" color={colors.secondary} />
  //       </View>
  //     );
  //   }
  return (
    <View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <CustomPicker
            options={Makes}
            placeholder="Make"
            getLabel={(item) => item.MakeName}
            onValueChange={(value) => {
              value ? JSON.stringify(value) : setmakeName('');
              setMakeId(value.MakeID);
              setmakeName(value.MakeName);
            }}
          />
          <CustomPicker
            options={Model}
            placeholder="Model"
            getLabel={(item) => item.ModelCode}
            onValueChange={(value) => {
              value ? JSON.stringify(value) : setModelCode('');
              setModelCode(value.ModelCode);
              setModelId(value.ModelID);
            }}
          />
          <CustomPicker
            options={Years}
            placeholder="Year"
            getLabel={(item) => item.YearCode}
            onValueChange={(value) => {
              value ? JSON.stringify(value) : setYearCode('');
              setYearCode(value.YearCode);
              setYearId(value.YearID);
              //   alert(value.YearID);
            }}
          />
        </View>
        <TextInput
          style={styles.serchTextinput}
          placeholder="VIN,accident,plate#"
          value={searchQuery}
          onChangeText={(searchQuery) => setsearchQuery(searchQuery)}
        />
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => {
            setLoading(true);
            getAccidentHistory();
          }}>
          <Text style={styles.opacityText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchAccident}
        keyExtractor={(accidents) => accidents.AccidentID.toString()}
        initialNumToRender={10}
        // ItemSeparatorComponent={ListItemSeperator}
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
            Search={() => navigation.navigate('Request')}
            viewAccident={() =>
              navigation.navigate('ViewAccident', {
                params: {
                  id: item.AccidentID,
                },
                screen: 'OpenAccident',
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
                id: item.AccidentID,
              })
            }
          />
        )}
      />
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      ) : null}
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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  opacityText: {
    color: colors.white,
    alignSelf: 'flex-end',
    backgroundColor: colors.opacity,
    padding: 5,
  },
  opacity: {
    borderRadius: 8,
  },
  serchTextinput: {
    borderWidth: 0.5,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccidentHistoryOpened);
