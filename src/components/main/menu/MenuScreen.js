import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

//Components
import SliderMenuItem from './SliderMenuItem'
import ProductListItem from './ProductListItem'

const MenuScreen = () => {
  return (
    <ScrollView style={[{ backgroundColor: '#fff', width: '100%' }]}>
      <FlatList
        style={[{ marginBottom: 30 }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={useSelector(state => state.menu.sliderItems)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <SliderMenuItem item={item} />}
      />
      <FlatList
        data={useSelector(state => state.menu.productList)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductListItem item={item} />}
      />
    </ScrollView>
  )
}

export default MenuScreen
