import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

//Components
import CartItem from '../cart/CartItem'

//Styles
import { container } from '../../../../assets/styles/container';
import { text } from '../../../../assets/styles/text';

const ProductSection = () => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    return (
        DATA.length > 0 ?
            <View>
                <View style={container.subtitleContainer}>
                    <Text style={text.confirmSubtitle}>
                        Убедитесь в правильности выбранных товаров
                    </Text>
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => (<CartItem item={item} />)}
                />
                <Text style={[text.confirmSubtitle, { alignSelf: 'flex-start' }]}>
                    = К оплате: {totalOrderSum} Р
                </Text>
            </View>
            : null
    )
}

export default ProductSection

