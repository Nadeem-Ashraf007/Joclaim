import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Cards = ({
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
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* first view */}
      <View style={{marginBottom: 5}}>
        {/* <Text style={styles.imageReview}>Reviewed</Text> */}

        {/* <Image
              style={styles.Logoimage}
              source={require('../images/Hyunda.png')}
            /> */}
        <View
          style={{
            width: '98%',
            alignItems: 'center',
            // justifyContent: 'center',
            marginVertical: 5,
          }}>
          {image && <Image style={styles.image} source={image} />}
          <Text style={[styles.text, {width: '90%'}]}>
            VehicleOwnerName :{makename}
          </Text>
          <Text style={[styles.text, {width: '90%'}]}>
            RequestNumber:{RequestNumber}
          </Text>
          <Text style={[styles.text, {width: '90%'}]}>
            AccidentNo:{AccidentNo}
          </Text>
          <Text
            style={{
              width: '90%',
              fontSize: 17,
              color: colors.primary,
              fontWeight: 'bold',
            }}>
            WorkshopName:{WorkshopName}
          </Text>
          <Text style={[styles.text, {width: '90%'}]}>
            Arabicmakename:{arabicmakename}
          </Text>
          <Text style={[styles.text, {width: '90%'}]}>VIN:{VIN}</Text>
          <Text style={[styles.text, {width: '90%'}]}>PlateNo:{PlateNo}</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '90%',
              justifyContent: 'center',
            }}>
            <Text style={styles.text}></Text>
            {/* <Text style={[styles.text, {marginLeft: 5}]}>
              Arabicmakename:{arabicmakename}
            </Text> */}
            {/* <View style={styles.badgeicon}>
              <Text style={styles.badgeicontext}>+11</Text>
            </View> */}
            {/* <Icon
              name="timer-sand-empty"
              size={20}
              style={[styles.icon, {marginLeft: 5}]}
            /> */}
          </View>
        </View>
      </View>
      {/* second view */}
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.textContainer}>
            {/* <Icon
              name="google-maps"
              size={15}
              style={styles.icon}
              color={colors.black}
            /> */}
            {/* <Text style={{width: '90%', fontSize: 20, color: colors.primary}}>
              WorkshopName:{WorkshopName}
            </Text> */}
          </View>
          <View style={styles.textContainer}>
            {/* <Icon name="timer-sand" size={15} style={styles.icon} />
            <Text style={{width: '90%', fontSize: 20, color: colors.primary}}>
              WorkshopName:{WorkshopName}
            </Text> */}
            {/* <Text style={{width: '50%'}}>{createdon}</Text> */}
          </View>
        </View>
        <View style={styles.containerOpacity}>
          {/* <TouchableOpacity style={styles.opacity}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>Quote</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.opacity, {width: '41%'}]}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              Not available
            </Text>
          </TouchableOpacity> */}
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
    padding: 5,
    borderRadius: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',

    color: colors.primary,
    // width: '50%',
  },
  image: {
    width: 100,
    height: 100,

    // marginRight: 5,
  },
  containerOpacity: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginVertical: 4,
  },
  opacity: {
    // width: '%',
    padding: 2,
    borderRadius: 5,
    margin: 3,
    // marginLeft: 10,
    backgroundColor: colors.opacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.primary,
    marginRight: 5,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: colors.lightgray,
    borderTopWidth: 1,
  },

  imageReview: {
    backgroundColor: colors.primary,
    //
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: colors.white,
    padding: 5,
    right: 8,
  },
  Logoimage: {
    width: 40,
    height: 30,
    alignSelf: 'center',
    resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
    left: 20,
    top: 23,
    // position: 'absolute',
  },
  badgeicon: {
    backgroundColor: colors.secondary,
    // flexDirection: 'row',
    height: 20,
    width: 27,
    marginLeft: 2,
    alignItems: 'center',
    borderRadius: 5,
    // position: 'absolute',
    // top: 29,
    // left: 73,
  },
  badgeicontext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Cards;

{
  /* <Text>{props.name}</Text>
<Text>{props.number}</Text> */
}
