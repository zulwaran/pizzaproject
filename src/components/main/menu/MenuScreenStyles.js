import { StyleSheet } from 'react-native'
import {
  PRIMARY_COLOR,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  deviceWidth,
  BLACK_COLOR,
  WHITE_COLOR
} from '../../../../assets/styles/common.style'

export const MenuScreenStyles = StyleSheet.create({
  //Container
  productInfo: {
    flexDirection: 'row'
  },
  productInfoRightHalf: {
    width: '50%'
  },
  productContainer: {
    marginBottom: 30,
    marginRight: 10,
    borderBottomColor: 'rgba(157, 141, 143, 0.15)',
    borderBottomWidth: 2,
    backgroundColor: WHITE_COLOR
  },
  sliderItem: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  sliderTextActive: {
    fontSize: FONT_SIZE_LARGE,
    color: PRIMARY_COLOR
  },
  sliderText: {
    fontSize: FONT_SIZE_LARGE,
    alignSelf: 'center',
    color: BLACK_COLOR
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
  sliderImg: {
    height: 80,
    width: 80,
    marginRight: 10
  }
})
