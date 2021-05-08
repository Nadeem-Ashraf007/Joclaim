import {DefaultTheme} from '@react-navigation/native';
import colors from '../Constants/colors';
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.primary,
  },
};
