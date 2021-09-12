import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR, FONT_SIZE_LARGE, BLACK_COLOR, WHITE_COLOR } from '../../../../assets/styles/common.style'

export const ModalStyles = StyleSheet.create({
  //Container
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalView: {
    maxHeight: '50%',
    backgroundColor: WHITE_COLOR,
    padding: 35,
    alignItems: 'center',
    shadowColor: BLACK_COLOR,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  //Buttons
  selectTimeButton: {
    borderColor: BLACK_COLOR,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 10
  },
  closeModalButton: {
    marginTop: 10,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 25,
    paddingVertical: 10,
    width: '90%',
    alignItems: 'center'
  },

  //Text
  modalText: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 30
  },
  textLarge: {
    fontSize: FONT_SIZE_LARGE,
    color: BLACK_COLOR
  }
})
