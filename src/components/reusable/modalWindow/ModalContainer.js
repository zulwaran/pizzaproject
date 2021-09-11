import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAction } from '../../../reducers/actions/modalActions'
import { selectDeliveryDayAction, selectDeliveryTimeAction } from '../../../reducers/actions/orderActions'
import ModalPopUp from './ModalPopUp'

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
