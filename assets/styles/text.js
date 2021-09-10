import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR, FONT_SIZE_SMALL, FONT_SIZE_MEDIUM, FONT_SIZE_LARGE, FONT_SIZE_EXTRALARGE } from './common.style'

export const text = StyleSheet.create({
  sliderTextActive: {
    fontSize: FONT_SIZE_LARGE,
    color: PRIMARY_COLOR
  },
  sliderText: {
    fontSize: FONT_SIZE_LARGE,
    alignSelf: 'center',
    color: '#000'
  },
  productTextTitle: {
    maxWidth: '75%',
    fontSize: FONT_SIZE_LARGE
  },
  productTextDecription: {
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 5
  },
  cartTextbutton: {
    fontSize: FONT_SIZE_LARGE
  },
  cartTextEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productPriceMedium: {
    fontSize: FONT_SIZE_MEDIUM
  },
  productPriceSmall: {
    alignSelf: 'center',
    fontSize: FONT_SIZE_SMALL
  },

  orderListMenu: {
    fontSize: FONT_SIZE_MEDIUM,
    padding: 10,
    opacity: 0.3
  },
  orderListMenuActive: {
    fontSize: FONT_SIZE_MEDIUM,
    borderBottomColor: PRIMARY_COLOR,
    padding: 10,
    borderBottomWidth: 1
  },
  exitButtonText: {
    textAlign: 'center',
    fontSize: FONT_SIZE_SMALL
  },
  orderStatus: {
    color: 'brown',
    borderColor: 'brown',
    opacity: 0.3,
    borderRadius: 25,
    borderWidth: 1,
    fontSize: FONT_SIZE_SMALL,
    padding: 5
  },
  orderStatusActive: {
    color: '#357138',
    borderColor: '#357138',
    borderRadius: 25,
    borderWidth: 1,
    fontSize: FONT_SIZE_SMALL,
    padding: 5
  },
  textSmall: {
    fontSize: FONT_SIZE_SMALL,
    color: 'black'
  },
  textLarge: {
    fontSize: FONT_SIZE_LARGE,
    color: 'black'
  },
  inputLabel: {
    marginTop: 10,
    fontSize: FONT_SIZE_MEDIUM
  },
  confirmSubtitle: {
    fontSize: FONT_SIZE_EXTRALARGE,
    textAlign: 'center',
    alignSelf: 'center'
  },
  paymentType: {
    fontSize: FONT_SIZE_SMALL,
    marginLeft: 8,
    color: '#000'
  },
  errorMessage: {
    color: 'red',
    marginLeft: 10
  },
  modalText: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 30
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 22
  },
  confirmOrderButtonText: {
    fontSize: FONT_SIZE_EXTRALARGE,
    textAlign: 'center'
  },
  orderConfirmLargeText: {
    color: 'green',
    fontSize: 32,
    marginBottom: 10
  },
  orderConfirmBottomText: {
    textAlign: 'center',
    paddingHorizontal: 20
  },
  smallText: {
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 10
  }
})
