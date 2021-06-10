import {combineReducers} from 'redux';
import accidentReducer from './accident/accidentReducer';
import metaDataReducer from './metaData/metaDataReducer';
import requestReducer from './request/requestReducer';
import localizationReducer from './Translation/localizationReducer';
const rootReducer = combineReducers({
  user: accidentReducer,
  reques: requestReducer,
  getMetaData: metaDataReducer,
  translate: localizationReducer,
});
export default rootReducer;
