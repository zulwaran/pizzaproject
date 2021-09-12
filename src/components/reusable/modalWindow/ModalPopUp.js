import React from 'react'
import { Text, View, Modal, Pressable, FlatList } from 'react-native'

//Components
import ModalItems from './ModalItems'

//Functions
import { fetchDate, fetchTime } from '../../../functions/DateFunctions'

//Styles
import { ModalStyles } from './ModalStyles'

const ModalPopUp = props => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visibleModal}>
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <FlatList
            data={props.modalType === 'date' ? fetchDate() : fetchTime(props.deliveryDay)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ModalItems
                item={item}
                modalType={props.modalType}
                deliveryDay={props.deliveryDay}
                deliveryTime={props.deliveryTime}
                selectDateValue={props.selectDateValue}
              />
            )}
          />
          <Pressable style={ModalStyles.closeModalButton} onPress={() => props.closeModal()}>
            <Text style={ModalStyles.textLarge}>Готово</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ModalPopUp
