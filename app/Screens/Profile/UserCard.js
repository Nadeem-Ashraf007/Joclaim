import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Global} from '../Constants/Global';
import colors from '../Constants/colors';
import Strings from '../localization/LocalizedString';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const UserCard = ({style, FirstName, PhoneNumber, Email, image, signature}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: Global.apiurl + image}} />

        <View style={{alignItems: 'flex-start', marginBottom: 5}}>
          <Text style={styles.text}>{Strings.workshopOwner}</Text>
          <Text style={{fontSize: 17}}>{FirstName}</Text>
          <Text style={styles.text}>{Strings.phone}</Text>
          <Text style={{fontSize: 17}}>{PhoneNumber}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{Strings.email}</Text>
            <Icon
              name="checkbox-marked-circle"
              color={colors.primary}
              size={20}
            />
          </View>

          <Text style={{fontSize: 17}}>{Email}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{Strings.esignature}</Text>
            <Icon name="rename-box" color={colors.primary} size={20} />
          </View>
          <Image
            style={styles.sign}
            source={{uri: Global.apiurl + signature}}
          />
        </View>
      </View>
      <Text style={styles.text}>{Strings.employeePermisions}</Text>

      <View style={{flexDirection: 'row'}}>
        <Icon
          name="stop"
          color={colors.primary}
          style={{borderRadius: 10}}
          size={20}
        />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.addaccidentParts}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="stop" color={colors.primary} size={20} />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.receiveParts}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="stop" color={colors.primary} size={20} />
        <Text
          style={[styles.text, {marginLeft: '5%', color: colors.IconValue}]}>
          {Strings.repairCar}
        </Text>
      </View>
      {/*  */}
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
  },
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: '5%',
    top: -40,
    backgroundColor: colors.black,
  },
  sign: {
    width: 100,
    height: 45,
    resizeMode: 'cover',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.TITLE,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default UserCard;
