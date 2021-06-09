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
const AccidentHistoryOpened = ({navigation, userData}) => {
  const [yearCod, setYearCode] = useState();
  const [yearId, setYearId] = useState(null);
  const [ModelCode, setModelCode] = useState(null);
  const [ModelId, setModelId] = useState(null);
  const [makeName, setmakeName] = useState(null);
  const [makeid, setMakeId] = useState(null);
  const [searchQuery, setsearchQuery] = useState(null);
  const [searchAccident, setsearchAccident] = useState([]);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState();
  const MetaData = userData.users;
  const Models = userData.users.Models;
  const Model = Models.filter((r) => r.MakeID == makeid);
  Global.accidentHistoryIcon = icon;
  const getMakeName = (MakeName, MakeID) => {
    setmakeName(MakeName);
    setMakeId(MakeID);
  };
  const getModelCode = (ModelCode, ModelID) => {
    setModelCode(ModelCode);
    setModelId(ModelID);
  };
  const getYearCode = (YearCode, YearID) => {
    setYearCode(YearCode);
    setYearId(YearID);
  };
  const getAccidentHistory = () => {
    debugger;
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetCompanyHistoryAccidents?CompanyID=' +
          Global.companyid +
          '&WorkshopID=' +
          Global.workshopId +
          '&StartRow=1&RowsPerPage=8&MakeID=' +
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
          const responce = responseJson.Accidents;
          setsearchAccident(responce);
          setIcon(responce.length);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };
  debugger;
  return (
    <View style={{flex: 1}}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <CustomPicker
            options={MetaData.Makes}
            placeholder="Make"
            getLabel={(item) => item.MakeName}
            onValueChange={(value) => {
              value ? getMakeName(value.MakeName, value.MakeID) : null;
            }}
          />
          <CustomPicker
            options={Model}
            placeholder="Model"
            getLabel={(item) => item.ModelCode}
            onValueChange={(value) => {
              value
                ? getModelCode(value.ModelCode, value.ModelID)
                : setModelId(null);
            }}
          />
          <CustomPicker
            options={MetaData.Years}
            placeholder="Year"
            getLabel={(item) => item.YearCode}
            onValueChange={(value) => {
              value
                ? getYearCode(value.YearCode, value.YearID)
                : setYearId(null);
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
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              // marginHorizontal: '10%',
            }}>
            <ActivityIndicator size="large" color={colors.secondary} />
          </View>
        ) : null}
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
