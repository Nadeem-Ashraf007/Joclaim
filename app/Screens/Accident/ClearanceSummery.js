import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import {Global} from '../Components/Global';
import {WebView} from 'react-native-webview';

const ClearanceSummary = ({route}) => {
  const [summary, setSummary] = useState([]);
  const accidentid = route.params.id;
  const companyid = route.params.companyid;
  // alert(companyid);
  // alert(accidentid);

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      fetch(
        'https://qapi.joclaims.com/api/Company/GetClearanceSummary?AccidentID=' +
          accidentid +
          '&CompanyID=' +
          companyid,
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
          const responce = responseJson.Request;
          setSummary(responce);
        });
    } catch (e) {
      alert(e);
    }
  };

  const uri = Global.apiurl + summary.ClearanceSummaryPdfUr;

  return (
    <View style={{flex: 1}}>
      <WebView
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
        // dataDetectorTypes={all}
        style={styles.webview}
        // automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        originWhitelist={['*']}
        useWebKit={true}
        embedded={true}
        source={{uri: `https://docs.google.com/gview?embedded=true&url=${uri}`}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  webview: {
    flex: 1,
  },
});
export default ClearanceSummary;
