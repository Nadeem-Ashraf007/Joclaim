import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import UploadImage from '../Accident/UploadImage';
import {RadioButton} from 'react-native-paper';
import colors from '../Constants/colors';
import {Global} from '../Constants/Global';
import CardAccident from '../Accident/CardAccident';
import {CustomPicker} from 'react-native-custom-picker';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';
const WorkshhopFinding = () => {
  const [loading, setLoading] = useState(true);
  const [workShopFind, setworkShopFind] = useState([]);
  const [quantity, setquantity] = useState('');
  const [note, setNote] = useState();
  const [checked, setChecked] = React.useState();
  const [check, setcheck] = useState();
  const [picker, setpicker] = useState();
  // const accidentid = route.params.id;
  useEffect(() => {
    getData();
  });
  const getData = () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetAccidentMetaData?CompanyID=' +
          Global.companyid,
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
          const responce = responseJson.AutomotivePart.filter(
            (r) => r.AutomotivePartID < 98,
          );
          setworkShopFind(responce);
          // alert(workShopFind);
          setLoading(false);
        });
    } catch (e) {
      alert(e);
    }
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView style={styles.container}>
        <CustomPicker
          placeholder={'Name'}
          options={workShopFind}
          getLabel={(item) => item.PartName}
          onValueChange={(value) => {
            value ? JSON.stringify(value) : 'No item were selected!';
            setpicker(value.PartName);
          }}
        />
        <Text style={styles.text}>Quantity</Text>
        <TextInput
          // defaultValue={quantity}
          // defaultValue={'quantity'}
          style={styles.textinput}
          onChangeText={(quantity) => setquantity(quantity)}
          value={quantity}
        />

        <Text style={styles.text}>Condition</Text>
        <View style={{alignItems: 'flex-start'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>New</Text>
            <RadioButton
              value="New"
              status={checked === 'New' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('New')}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Used</Text>
              <RadioButton
                value="Used"
                status={checked === 'Used' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Used')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Any</Text>
              <RadioButton
                value="Any"
                status={checked === 'Any' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Any')}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Origional</Text>
            <RadioButton
              value="Origional"
              status={check === 'Origional' ? 'checked' : 'unchecked'}
              onPress={() => setcheck('Origional')}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Aftermarket</Text>
              <RadioButton
                value="Aftermarket"
                status={check === 'Aftermarket' ? 'checked' : 'unchecked'}
                onPress={() => setcheck('Aftermarket')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Any</Text>
              <RadioButton
                value="Any"
                status={check === 'Any' ? 'checked' : 'unchecked'}
                onPress={() => setcheck('Any')}
              />
            </View>
          </View>
        </View>
        <TextInput
          // defaultValue={quantity}
          placeholder="Note"
          style={styles.textinput}
          onChangeText={(note) => setNote(note)}
          value={note}
        />
        <UploadImage />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.opacity}>
            <Text style={styles.opacityText}>Add Parts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacity}>
            <Text style={styles.opacityText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <Text>{picker}</Text>
        <Text>{checked}</Text>
        <Text>{check}</Text>
        <Text>{note}</Text>
        <Text>{quantity}</Text>
        {/* <CardAccident /> */}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.primary,
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  textinput: {
    borderWidth: 0.5,
    borderRadius: 10,
  },
  opacityText: {
    color: colors.white,
  },
  opacity: {
    backgroundColor: colors.opacity,
    borderRadius: 5,
    padding: 8,
  },
});
export default WorkshhopFinding;
