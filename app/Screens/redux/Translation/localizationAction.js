import {ENGLISH, ARABIC} from './localizationTypes';
import Strings from '../../localization/LocalizedString';

export const changeTranslation = () => {
  return (dispatch) => {
    if (!changeView) {
      dispatch(English(changeView));
      Strings.setLanguage('en');
    } else {
      dispatch(Arabic(changeView));
      Strings.setLanguage('ar');
    }
  };
};

export const English = () => {
  return {
    type: ENGLISH,
  };
};
export const Arabic = () => {
  return {
    type: ARABIC,
  };
};
