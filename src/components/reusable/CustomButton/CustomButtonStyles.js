import { StyleSheet } from 'react-native'
import common, {
  PRIMARY_COLOR,
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRALARGE,
  WHITE_COLOR
} from '../../../../assets/styles/common.style'

export const CustomButtonStyles = StyleSheet.create({
  //Container
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  buttonCircleContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  //Buttons
  buttonCircle: {
    ...common.yellowBorderButton,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 5
  },
  selectButton: {
    ...common.yellowBorderButton,
    backgroundColor: WHITE_COLOR,
    borderRadius: 30,
    padding: 10
  },
  cartButton: {
    ...common.button,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30
  },
  confirmButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10
  },

  //Text
  productPriceSmall: {
    alignSelf: 'center',
    fontSize: FONT_SIZE_SMALL
  },
  productPriceMedium: {
    fontSize: FONT_SIZE_MEDIUM
  },
  cartTextButton: {
    fontSize: FONT_SIZE_LARGE
  },
  confirmOrderButtonText: {
    fontSize: FONT_SIZE_EXTRALARGE,
    textAlign: 'center'
  },
  exitButtonText: {
    textAlign: 'center',
    fontSize: FONT_SIZE_SMALL
  }
})
