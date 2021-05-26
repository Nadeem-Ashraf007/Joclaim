import {ENGLISH, ARABIC} from './localizationTypes';

const localizationState = {
  changeView: false,
};
const localization = (state = localizationState, action) => {
  switch (action.type) {
    case ENGLISH:
      return {
        ...state,
        changeView: true,
      };
    case ARABIC:
      return {
        ...state,
        changeView: false,
      };
    default:
      return state;
  }
};
export default localization;
