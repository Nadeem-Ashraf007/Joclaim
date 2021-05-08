import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';

const CardAccident = ({
  style,
  image,
  createdon,
  AccidentNo,
  RequestNumber,
  WorkshopName,
  VIN,
  PlateNo,
  UserName,
  VehicleOwnerName,
  MakeName,
  ModelCode,
  YearCode,
  accidentTypename,
  CreatedOn,
  ArabicModelName,
  onPress,
  onpress,
  summary,
  updateAccident,
  InprogressRequestCount,
}) => {
  return (
    <View style={[styles.card, style]}>
      <Text
        style={{
          backgroundColor: colors.secondary,
          color: colors.white,
          padding: 3,
          fontSize: 15,
          borderRadius: 8,
          width: '30%',
          textAlign: 'center',
        }}>
        {PlateNo}
      </Text>

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
              Accident No:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {AccidentNo}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          {/* <Text style={styles.text}>{MakeName}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{ModelCode}</Text>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text> */}
        </View>
        {/* <Text style={{fontSize: 15, marginBottom: 5}}>make</Text> */}

        <View style={styles.lastcontainer}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Workshome name:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {WorkshopName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident Type:
            </Text>
            <Text style={{color: colors.TextValue, fontSize: 15}}>
              {accidentTypename}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Accident No:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {AccidentNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              VIN:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>{VIN}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Created By:
            </Text>

            <Text style={{fontSize: 16, marginHorizontal: 5}}>{UserName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Vehicle Owner Name:
            </Text>
            <Text
              style={{
                color: colors.mediumgray,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {VehicleOwnerName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.5,
              justifyContent: 'flex-end',
              marginTop: 5,
            }}>
            <Text
              style={{
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: 3,
                borderRadius: 5,
                position: 'absolute',
                left: 4,
              }}>
              {InprogressRequestCount}R
            </Text>
            <TouchableOpacity onPress={summary}>
              <Icon
                name="navicon"
                color={colors.darkGray}
                style={{marginHorizontal: 10}}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <Icon
                name="search"
                style={{marginHorizontal: 10}}
                color={colors.darkGray}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={updateAccident}>
              <Icon
                name="edit"
                style={{marginHorizontal: 10}}
                color={colors.opacity}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onpress}>
              <Icon
                name="eye"
                style={{marginHorizontal: 10}}
                color={colors.opacity}
                size={24}
              />
            </TouchableOpacity>
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
    // width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  imag: {
    width: 50,
    height: 50,

    borderRadius: 100,
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
});

export default CardAccident;
