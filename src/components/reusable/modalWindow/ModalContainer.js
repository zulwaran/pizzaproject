import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Components
import ModalPopUp from './ModalPopUp'

//Actions
import { selectDeliveryDayAction, selectDeliveryTimeAction } from '../../../actions/orderActions'
import { closeModalAction } from '../../../actions/modalActions'

const ModalContainer = () => {
  const dispatch = useDispatch()
  const modalType = useSelector(state => state.modal.modalType)
  const visibleModal = useSelector(state => state.modal.visibleModal)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const deliveryTime = useSelector(state => state.order.deliveryTime)

  const selectDateValue = value => {
    switch (modalType) {
      case 'date':
        dispatch(selectDeliveryDayAction(value))
        break
      case 'time':
        dispatch(selectDeliveryTimeAction(value))
        break
    }
  }

  const closeModal = () => {
    dispatch(closeModalAction())
  }

  return (
    <ModalPopUp
      modalType={modalType}
      visibleModal={visibleModal}
      deliveryDay={deliveryDay}
      deliveryTime={deliveryTime}
      closeModal={closeModal}
      selectDateValue={selectDateValue}
    />
  )
}

export default ModalContainer
