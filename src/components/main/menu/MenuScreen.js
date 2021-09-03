import React from 'react'
import { FlatList, ScrollView } from 'react-native'

//Components
import SliderMenuItem from './SliderMenuItem'
import ProductListItem from './ProductListItem'
import { useSelector } from 'react-redux'


const MenuScreen = () => {
    const SLIDER_ITEM = useSelector(state => state.menu.sliderItems)
    const PRODUCT = useSelector(state => state.menu.productList);


    return (
        <ScrollView style={[{ backgroundColor: "#fff", width: '100%' }]}>
            <FlatList
                style={[{ marginBottom: 30 }]}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={SLIDER_ITEM}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<SliderMenuItem item={item} />)}
            />
            <FlatList
                data={PRODUCT}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<ProductListItem item={item} />)}
            />
        </ScrollView>
    )
}

export default MenuScreen
