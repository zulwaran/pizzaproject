import { StyleSheet } from 'react-native'
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  deviceWidth,
  WHITE_COLOR
} from '../../../../assets/styles/common.style'

export const CartScreenStyles = StyleSheet.create({
  //Container
  cartContainer: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    marginHorizontal: 5
  },
  productInfo: {
    flexDirection: 'row'
  },
  productInfoRightHalf: {
    width: '50%'
  },

  //Images
  productInfoImage: {
    width: '50%',
    height: deviceWidth / 2,
    marginRight: 10,
    alignSelf: 'center',
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: 'contain'
  },

  //Text
  productTextTitle: {
    maxWidth: '75%',
    fontSize: FONT_SIZE_LARGE
  },
  productTextDecription: {
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 5
  },
  productPriceMedium: {
    fontSize: FONT_SIZE_MEDIUM
  }
})
