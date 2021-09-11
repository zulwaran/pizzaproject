import React, { useState } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

//Firebase
import firebase from 'firebase'

//Components
import EmptyFlatList from '../../reusable/EmptyFlatList'
import OrderList from './OrderList'
import OrderListHead from './OrderListHead'
import CustomButton from '../../reusable/customButton'

const OrderListContainer = () => {
  const [toggleOrderStatus, setToggleOrderStatus] = useState('actual')
  const DATA = useSelector(state => state.order.orderList)

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      })
  }

  return (
    <ScrollView>
      <OrderListHead toggleOrderStatus={toggleOrderStatus} setToggleOrderStatus={setToggleOrderStatus} />
      {toggleOrderStatus === 'actual' ? (
        <FlatList
          data={DATA.filter(elem => {
            return elem.status == 'Оформляется' || elem.status == 'Готовим' || elem.status == 'Везем'
          })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <OrderList item={item} />}
          ListEmptyComponent={<EmptyFlatList type={'OrderListScreen'} />}
        />
      ) : (
        <FlatList
          data={DATA.filter(elem => {
            return elem.status == 'Доставлен'
          })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <OrderList item={item} />}
          ListEmptyComponent={<EmptyFlatList type={'OrderListScreen'} />}
        />
      )}
      <CustomButton type={'LogOutButton'} logOut={logOut} />
    </ScrollView>
  )
}

export default OrderListContainer
