import {ENGLISH, ARABIC} from './localizationTypes';
import Strings from '../../localization/LocalizedString';

export const English = (data) => {
  console.log('data', data);
  return {
    type: ENGLISH,
    payload: data,
  };
};
