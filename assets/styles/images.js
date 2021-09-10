import { StyleSheet, Dimensions } from 'react-native'
import { deviceWidth } from './common.style'

export const images = StyleSheet.create({
  headerLogo: {
    width: '20%',
    marginRight: 30,
    resizeMode: 'contain'
  },
  headerTitle: {
    width: '70%',
    resizeMode: 'contain'
  },
  productInfoImage: {
    width: '50%',
    height: deviceWidth / 2,
    marginRight: 10,
    alignSelf: 'center',
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: 'contain'
  },
  icon: {
    paddingTop: 5,
    marginRight: 5
  },
  sliderImg: {
    height: 80,
    width: 80,
    marginRight: 10
  },
  orderConfirmImage: {
    width: 150,
    height: 150
  }
})
