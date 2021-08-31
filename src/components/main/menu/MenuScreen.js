import React, { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { db, firebase } from '../../../../firebase'

//Components
import SliderMenuItem from './SliderMenuItem'
import ProductListItem from './ProductListItem'
import { useDispatch, useSelector } from 'react-redux'


const MenuScreen = () => {
    const user = firebase.auth().currentUser;
    const SLIDER_ITEM = useSelector(state => state.menu.sliderItems)
    const PRODUCT = useSelector(state => state.menu.productList);
    const dispatch = useDispatch();

    const fetchProduct = () => {
        db.collection('products').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dispatch({ type: "FETCH_PRODUCT_LIST", payload: doc.data() })
            })
        })
    }

    const fetchSlider = () => {
        db.collection('slider').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dispatch({ type: "FETCH_SLIDER_ITEMS", payload: doc.data() })
            })
        })
    }

    const fetchCart = () => {
        db.collection('cart').where("uid", "==", user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dispatch({ type: "FETCH_CART", payload: doc.data() })
            })
        })
    }

    useEffect(() => {
        if (PRODUCT.length === 0 || SLIDER_ITEM === 0) {
            fetchProduct()
            fetchSlider()
            fetchCart()
        }
    })

    return (
        <ScrollView style={[{ backgroundColor: "#fff", marginTop: 50, width: '100%', }]}>
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
