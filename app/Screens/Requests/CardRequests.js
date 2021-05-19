import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/request/requestAction';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
}) => {
  const Delive = userData.request.filter((r) => r.StatusID == 17);
  return (
    <View style={[styles.card, style]}>
      <View>
        {ready && (
          <Text
            style={{
              backgroundColor: colors.primaryDark,
              color: colors.white,
              padding: 5,
              width: '40%',
              textAlign: 'center',
              fontSize: 15,
              borderRadius: 10,
            }}>
            Car is Ready
          </Text>
        )}
      </View>

      <View style={{flexDirection: 'row'}}>
        {image && (
          <Image style={styles.imag} source={{uri: Global.apiurl + image}} />
        )}
        <View style={{marginHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.text, {marginHorizontal: 5}]}>{MakeName}</Text>
            <Text style={[styles.text, {marginHorizontal: 5}]}>
              {ModelCode}
            </Text>
            <Text style={styles.text}>{YearCode}</Text>

            {/* <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 15,
                fontWeight: 'bold',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              Created by:
            </Text>
            <Text style={styles.innerText}>{makename}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
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
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>Workshome name:</Text>
            <Text style={styles.innerText}>{WorkshopName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>Request Number:</Text>
            <Text style={styles.innerText}>{RequestNumber}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>Accident No:</Text>
            <Text style={styles.innerText}>{AccidentNo}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>VIN:</Text>
            <Text style={styles.innerText}>{VIN}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>Plate NO:</Text>
            <Text style={styles.innerText}>{PlateNo}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>PO Amount:</Text>
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
    width: '98%',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  imag: {
    width: '35%',
    height: 90,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
  },
  lastcontainer: {
    borderTopWidth: 1,
    width: '100%',
    borderTopColor: colors.darkgray,
  },
  innerText: {
    color: colors.black,
    fontSize: 17,
  },
  headingText: {
    color: colors.primary,
    fontSize: 17,
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
