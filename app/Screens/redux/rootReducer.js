import {combineReducers} from 'redux';
import accidentReducer from './accident/accidentReducer';
import requestReducer from './request/requestReducer';
import localizationReducer from './Translation/localizationReducer';
const rootReducer = combineReducers({
  // open: openReducer,
  //   Ice: iceCreamReducer,
  user: accidentReducer,
  reques: requestReducer,
  translate: localizationReducer,
});
export default rootReducer;
