import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import SliderMenuItem from './SliderMenuItem'
import ProductListItem from './ProductListItem'

//Reducer & Functions
import { AddItemToCart } from '../../../functions/Constructors'
import { addItemToCartAction } from '../../../actions/cartActions'
import { toggleMenuAction } from '../../../actions/menuActions'

const MenuScreenContainer = () => {
  const dispatch = useDispatch()
  const activeType = useSelector(state => state.menu.activeType)
  const productType = useSelector(state => state.menu.activeType)

  const toggleItem = item => {
    dispatch(toggleMenuAction(item.type))
  }
  const addItemToCart = async (item, size) => {
    let price = ''
    let productSize = size
    switch (size) {
      case '25 см':
        price = item.smallPrice
        break
      case '30 см':
        price = item.mediumPrice
        break
      case '35 см':
        price = item.largePrice
        break
      default:
        price = item.price
        productSize = ''
        break
    }
    let newItem = new AddItemToCart(item.title, productSize, item.decription, item.link, price)
    dispatch(addItemToCartAction(newItem))
  }

  return (
    <ScrollView style={{ backgroundColor: '#fff', width: '100%' }}>
      <FlatList
        style={[{ marginBottom: 30 }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={useSelector(state => state.menu.sliderItems)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <SliderMenuItem item={item} activeType={activeType} toggleItem={toggleItem} />}
      />
      <FlatList
        data={useSelector(state => state.menu.productList)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductListItem productType={productType} item={item} addItemToCart={addItemToCart} />
        )}
      />
    </ScrollView>
  )
}

export default MenuScreenContainer
