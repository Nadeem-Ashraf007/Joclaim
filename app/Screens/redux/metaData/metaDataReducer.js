import {
  METADATA_REQUEST,
  METADATA_SUCCESS,
  METADATA_FAILURE,
} from './metaDataTypes';
const metaDataState = {
  loding: false,
  metaData: [],
  error: '',
};

const metaDatareducer = (state = metaDataState, action) => {
  switch (action.type) {
    case METADATA_REQUEST:
      return {
        ...state,
        loding: true,
      };
    case METADATA_SUCCESS:
      return {
        loding: false,
        metaData: action.paylod,
        error: '',
      };
    case METADATA_FAILURE:
      return {
        loding: false,
        metaData: [],
        error: action.paylod,
      };
    default:
      return state;
  }
};
export default metaDatareducer;
