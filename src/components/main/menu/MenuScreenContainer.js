import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import SliderMenuItem from './SliderMenuItem'
import ProductListItem from './ProductListItem'

//Reducer & Functions
import { addItemToCartAction } from '../../../reducers/actions/cartActions'
import { toggleMenuAction } from '../../../reducers/actions/menuActions'

const MenuScreenContainer = () => {
  const dispatch = useDispatch()
  const activeType = useSelector(state => state.menu.activeType)
  const productType = useSelector(state => state.menu.activeType)

  const toggleItem = item => {
    dispatch(toggleMenuAction(item.type))
  }
  const addItemToCart = async (item, size) => {
    dispatch(addItemToCartAction(item, size))
  }

  return (
    <ScrollView style={[{ backgroundColor: '#fff', width: '100%' }]}>
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
