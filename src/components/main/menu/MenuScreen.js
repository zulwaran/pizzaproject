import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import SliderMenu from './SliderMenu'
import ProductList from './ProductList'


const MenuScreen = () => {
    return (
        <ScrollView>
            <SliderMenu />
            <ProductList />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default MenuScreen
