import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../request/requestTypes';
import {Global} from '../../Constants/Global';
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch(
      'https://qapi.joclaims.com/api/Company/GetCompanyRequests?CompanyID=' +
        Global.companyid +
        '&WorkshopID=' +
        Global.workshopId,
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
        const request = responseJson.Requests;
        dispatch(fetchUserSuccess(request));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (request) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: request,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
