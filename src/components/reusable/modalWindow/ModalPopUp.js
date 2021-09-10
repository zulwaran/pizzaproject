import React from 'react'
import { Text, View, Modal, Pressable, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import ModalItems from './ModalItems'

//Reducers & Functions
import { fetchDate, fetchTime } from '../../../functions/DateFunctions'
import { CLOSE_MODAL } from '../../../reducers/modal'

//Styles
import { buttons } from '../../../../assets/styles/buttons'
import { div } from '../../../../assets/styles/div'
import { text } from '../../../../assets/styles/text'

const ModalPopUp = () => {
  const modalType = useSelector(state => state.modal.modalType)
  const visibleModal = useSelector(state => state.modal.visibleModal)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
  }
  const dispatch = useDispatch()

  return (
    <Modal animationType="slide" transparent={true} visible={visibleModal}>
      <View style={div.centeredView}>
        <View style={div.modalView}>
          <FlatList
            data={modalType === 'date' ? fetchDate() : fetchTime(deliveryDay)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ModalItems item={item} />}
          />
          <Pressable style={buttons.closeModalButton} onPress={() => closeModal()}>
            <Text style={text.textLarge}>Готово</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ModalPopUp
