import { StyleSheet } from 'react-native'
import common, { BLACK_COLOR, FONT_SIZE_SMALL } from '../../../assets/styles/common.style'

export const AuthStyles = StyleSheet.create({
  //Container
  authContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  //Buttons
  authButton: {
    ...common.button,
    ...common.yellowBorderButton,
    padding: 10,
    marginTop: 10
  },

  //Inputs
  input: {
    ...common.input,
    borderRadius: 10,
    paddingHorizontal: 10
  },

  //Text
  textSmall: {
    fontSize: FONT_SIZE_SMALL,
    color: BLACK_COLOR
  }
})
