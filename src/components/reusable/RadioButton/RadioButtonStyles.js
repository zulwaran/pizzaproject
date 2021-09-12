import { StyleSheet } from 'react-native'
import { GRAY_COLOR, WHITE_COLOR } from '../../../../assets/styles/common.style'

export const RadioButtonStyles = StyleSheet.create({
  //Container
  radio: {
    height: 18,
    width: 18,
    position: 'relative',
    backgroundColor: WHITE_COLOR,
    borderRadius: 50,
    borderColor: GRAY_COLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedRadio: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: WHITE_COLOR,
    borderWidth: 6,
    borderColor: 'rgb(255, 192, 0)'
  }
})
