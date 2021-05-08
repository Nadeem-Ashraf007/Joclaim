import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../accident/accidentTypes';
import {Global} from '../../Constants/Global';
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    fetch(
      'https://qapi.joclaims.com/api/Company/GetCompanyAccidents?CompanyID=' +
        15 +
        '&WorkshopID=' +
        1,
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
        const users = responseJson.Accidents;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // const errorMsg = error.message;
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
