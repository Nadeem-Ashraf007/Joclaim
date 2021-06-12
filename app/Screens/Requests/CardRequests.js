import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/request/requestAction';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Strings from '../localization/LocalizedString';
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import Moment from 'moment';
const CardRequests = ({
  style,
  makename,
  arabicmakename,
  image,
  createdon,
  AccidentNo,
  RequestNumber,
  WorkshopName,
  VIN,
  PlateNo,
  BiddingDateTime,
  MakeName,
  ModelCode,
  YearCode,
  viewRequest,
  viewAccident,
  SerialNo,
  RequestRowNumber,
  userData,
  viewQutationsummary,
  printAllOffers,
  viewRequestLog,
  ready,
  POTotalAmount,
  ArabicModelName,
  ArabicMakeName,
}) => {
  const [changeView, setChangeView] = React.useState(Global.changeView);
  const Delive = userData.request.filter((r) => r.StatusID == 17);
  return (
    <View style={[styles.card, style]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {ready && (
          <Text
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              padding: 5,
              fontSize: 15,
              borderRadius: 10,
            }}>
            {Strings.CarIsReady}
          </Text>
        )}
      </View>

      <View style={{flexDirection: 'row'}}>
        {image && (
          <Image style={styles.imag} source={{uri: Global.apiurl + image}} />
        )}
        <View style={{marginHorizontal: 10, flexWrap: 'wrap'}}>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
              marginRight: 5,
              // width:'55%'
            }}>
            <Text style={[styles.text, {marginHorizontal: 5}]}>
              {!changeView ? ArabicMakeName : MakeName}
            </Text>
            <Text style={[styles.text, {marginHorizontal: 5}]}>
              {!changeView ? ArabicModelName : ModelCode}
            </Text>
            <Text style={styles.text}>{YearCode}</Text>

            {/* <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text> */}
          </View>

          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 15,
                fontWeight: 'bold',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              {Strings.CreatedBy}
            </Text>
            <Text style={styles.innerText}>{makename}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Icon
              style={{marginHorizontal: 5}}
              name="mail"
              size={20}
              color={colors.primary}
            />
            <Text style={{marginBottom: 10}}>
              {Moment(BiddingDateTime).format('LL')}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.lastcontainer}>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.workshomeName}</Text>
            <Text style={styles.innerText}>{WorkshopName}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.requestNumber}</Text>
            <Text style={styles.innerText}>{RequestNumber}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.accidentNo}</Text>
            <Text style={styles.innerText}>{AccidentNo}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.VIN}</Text>
            <Text style={styles.innerText}>{VIN}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.plateNO}</Text>
            <Text style={styles.innerText}>{PlateNo}</Text>
          </View>
          <View
            style={{
              flexDirection: !changeView ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>{Strings.poAmount}</Text>
            <Text style={styles.innerText}>{POTotalAmount} JOD</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 16,
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: 2,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              {SerialNo}/{RequestRowNumber}R
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.5,
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <TouchableOpacity onPress={viewRequest}>
              <Icon
                name="eye"
                color={colors.opacity}
                style={{marginHorizontal: 10}}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={viewAccident}>
              <Icon
                name="car"
                style={{marginHorizontal: 10}}
                color={colors.opacity}
                size={24}
              />
            </TouchableOpacity>
            {viewQutationsummary && (
              <TouchableOpacity onPress={viewQutationsummary}>
                <Icon
                  name="file-document-outline"
                  style={{marginHorizontal: 10}}
                  color={colors.darkGray}
                  size={24}
                />
              </TouchableOpacity>
            )}
            {printAllOffers && (
              <TouchableOpacity onPress={printAllOffers}>
                <Icon
                  name="arrange-send-backward"
                  style={{marginHorizontal: 10}}
                  color={colors.opacity}
                  size={24}
                />
              </TouchableOpacity>
            )}
            {viewRequestLog && (
              <TouchableOpacity onPress={viewRequestLog}>
                <Icon
                  name="clock-check"
                  style={{marginHorizontal: 10}}
                  color={colors.opacity}
                  size={24}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  imag: {
    // flex: 1,
    // width: null,
    // height: null,
    width: 90,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    flexWrap: 'wrap',
    // width: '25%',
  },
  lastcontainer: {
    borderTopWidth: 1,
    width: '100%',
    borderTopColor: colors.darkgray,
  },
  innerText: {
    color: colors.black,
    fontSize: 17,
    flexWrap: 'wrap',
  },
  headingText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
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
export default connect(mapStateToProps, mapDispatchToProps)(CardRequests);
