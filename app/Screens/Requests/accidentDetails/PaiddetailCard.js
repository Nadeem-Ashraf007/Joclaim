import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Global} from '../../Constants/Global';
import colors from '../../Constants/colors';

const PaiddetailCard = ({
  style,
  image,
  AccidentNo,
  UserName,
  MakeName,
  ModelCode,
  YearCode,
  AutomotivePartName,
  DemandedQuantity,
  CreatedByName,
  CreatedOn,
  ESignatureURL,
  ConditionTypeName,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imag} source={require('../../images/ICON.png')} />

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
              Created By:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {CreatedByName}
            </Text>
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
              Created on:
            </Text>

            <Text style={{fontSize: 16, marginHorizontal: 5}}>{CreatedOn}</Text>
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
              Name:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {AutomotivePartName}
            </Text>
          </View>
          <Text style={{alignSelf: 'center'}}>{ConditionTypeName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Quantity:
            </Text>
            <Text style={{color: colors.TextValue, fontSize: 15}}>
              {DemandedQuantity}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Status:
            </Text>
            <Text style={{fontSize: 16, marginHorizontal: 5}}>Approved</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Reject Note:
            </Text>

            <Icon style={{marginHorizontal: 5}} name="eye" size={18} />
          </View>

          <View>
            <Text
              style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>
              Surveyors
            </Text>

            <Image
              style={{width: 200, height: 50, resizeMode: 'cover'}}
              source={{uri: Global.apiurl + ESignatureURL}}
            />
            <Text style={{fontSize: 16, marginHorizontal: 5}}>
              {CreatedByName}
            </Text>
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
    flex: 1,
    marginVertical: 5,
    // width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  imag: {
    width: 100,
    height: 100,
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

export default PaiddetailCard;
