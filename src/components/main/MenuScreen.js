import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../Header'
import SliderMenu from '../SliderMenu'
import ProductList from '../ProductList'


const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <SliderMenu />
            <ProductList />
        </View>
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
