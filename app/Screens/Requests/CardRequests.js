import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
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
}) => {
  return (
    <View style={[styles.card, style]}>
      <View>{/* <Text>palte numbert</Text> */}</View>

      {/* <View style={{flexDirection: 'row'}}>
        {image && (
          <Image
            style={styles.imag}
            source={{uri: 'https://qapi.joclaims.com/' + image}}
          />
        )}
        <Text style={styles.text}>{MakeName}</Text>
        <Text style={[styles.text, {marginHorizontal: 5}]}>{ModelCode}</Text>
        <Text style={[styles.text, {marginHorizontal: 5}]}>{YearCode}</Text>

        <View>
          <Text style={{fontSize: 15, marginBottom: 5}}>{makename}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              style={{marginHorizontal: 5}}
              name="mail"
              size={20}
              color={colors.primary}
            />
            <Text style={{marginBottom: 10}}>{BiddingDateTime}</Text>
          </View>
        </View>
      </View> */}

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
            <Text style={{fontSize: 16, marginHorizontal: 5}}>{makename}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              style={{marginHorizontal: 5}}
              name="mail"
              size={20}
              color={colors.primary}
            />
            <Text style={{marginBottom: 10}}>{BiddingDateTime}</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.lastcontainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>
              Workshome name:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {WorkshopName}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>
              Request Number:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {RequestNumber}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>
              Accident No:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {AccidentNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>VIN:</Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>{VIN}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>Plate NO:</Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>{PlateNo}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.primary, fontSize: 17}}>
              PO Amount:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>----</Text>
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
              }}>
              {SerialNo}
            </Text>
            <Text
              style={{
                fontSize: 16,
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: 2,
              }}>
              /
            </Text>
            <Text
              style={{
                fontSize: 16,
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: 2,
              }}>
              {RequestRowNumber}
            </Text>
            <Text
              style={{
                fontSize: 16,
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: 2,
              }}>
              R
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
    height: 100,
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
});

export default CardRequests;
