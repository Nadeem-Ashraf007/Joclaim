import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './requestTypes';

const requestState = {
  loading: false,
  request: [],
  error: '',
};

const requestreducer = (state = requestState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        request: action.payload,
        error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        request: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default requestreducer;
