import { Dimensions } from 'react-native';

export default {
  smaller: Dimensions.get('window').width * 0.2,
  small: Dimensions.get('window').width * 0.5,
  meddium: Dimensions.get('window').width * 0.7,
  large: Dimensions.get('window').width * 0.8,
  larger: Dimensions.get('window').width * 0.9,
  max: Dimensions.get('window').width,
}