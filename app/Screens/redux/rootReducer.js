import {combineReducers} from 'redux';
// import openReducer from './accident/accidentReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';
import accidentReducer from './accident/accidentReducer';
const rootReducer = combineReducers({
  // open: openReducer,
  //   Ice: iceCreamReducer,
  user: accidentReducer,
});

export default rootReducer;
