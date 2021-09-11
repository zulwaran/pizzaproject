import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_MODAL } from '../../../reducers/modal'
import { SELECT_DELIVERY_DAY, SELECT_DELIVERY_TIME } from '../../../reducers/order'
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
        dispatch({ type: SELECT_DELIVERY_DAY, payload: value })
        break
      case 'time':
        dispatch({ type: SELECT_DELIVERY_TIME, payload: value })
        break
    }
  }

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
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
