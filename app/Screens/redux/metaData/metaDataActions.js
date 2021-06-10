import {
  METADATA_REQUEST,
  METADATA_SUCCESS,
  METADATA_FAILURE,
} from './metaDataTypes';
import {Global} from '../../Constants/Global';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchMetaDataReqest());
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
        dispatch(fetchMetaDataSucces(responseJson));
      })
      .catch((error) => {
        // const errorMsg = error.message;

        dispatch(fetchMetaDataFailre(error.message));
      });
  };
};
export const fetchMetaDataReqest = () => {
  return {
    type: METADATA_REQUEST,
  };
};

export const fetchMetaDataSucces = (metaData) => {
  return {
    type: METADATA_SUCCESS,
    paylod: metaData,
  };
};

export const fetchMetaDataFailre = (error) => {
  return {
    type: METADATA_FAILURE,
    paylod: error,
  };
};
