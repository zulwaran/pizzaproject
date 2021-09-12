import { StyleSheet } from 'react-native'
import common, {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRALARGE,
  BLACK_COLOR,
  GREEN_COLOR
} from '../../../assets/styles/common.style'

export const OrderConfirmStyles = StyleSheet.create({
  //Container
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  orderAcceptedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  //Images
  icon: {
    paddingTop: 5,
    marginRight: 5
  },
  orderConfirmImage: {
    width: 150,
    height: 150
  },

  //Inputs
  input: {
    ...common.input,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  commentTextArea: {
    ...common.input,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  inptTime: {
    ...common.input,
    color: BLACK_COLOR,
    marginLeft: 10,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '30%',
    textAlign: 'center'
  },

  //Text
  confirmSubtitle: {
    fontSize: FONT_SIZE_EXTRALARGE,
    textAlign: 'center',
    alignSelf: 'center'
  },
  inputLabel: {
    marginTop: 10,
    fontSize: FONT_SIZE_MEDIUM
  },
  paymentType: {
    fontSize: FONT_SIZE_SMALL,
    marginLeft: 8,
    color: BLACK_COLOR
  },
  orderConfirmLargeText: {
    color: GREEN_COLOR,
    fontSize: 32,
    marginBottom: 10
  },
  smallText: {
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 10
  },
  orderConfirmBottomText: {
    textAlign: 'center',
    paddingHorizontal: 20
  },

  //Buttons
  radioButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  redirectingButton: {
    ...common.yellowBorderButton,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 60,
    paddingVertical: 10
  }
})
