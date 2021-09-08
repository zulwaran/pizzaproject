import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Reducer
import { DELETE_FROM_CART } from '../../../reducers/cart'

//Styles
import { text } from '../../../../assets/styles/text';
import { container } from '../../../../assets/styles/container';
import { images } from '../../../../assets/styles/images';
import { div } from '../../../../assets/styles/div';

const CartItem = ({ item, type }) => {
    const dispatch = useDispatch();
    const DeleteItemFromCart = (item) => {
        dispatch({ type: DELETE_FROM_CART, payload: item })
    }
    return (
        <View
            style={container.cartItemContainer}>
            <View
                style={div.productInfo}>
                <Image
                    style={images.productInfoImage}
                    source={{
                        uri: item.link,
                    }}
                />
                <View style={div.productInfoRightHalf}>
                    <View
                        style={[{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }]}>
                        <Text style={[text.productTextTitle, { marginBottom: 5 }]}>
                            {item.title}
                        </Text>
                        {
                            type === 'OrderList' ? null :
                                <TouchableOpacity
                                    style={[{ paddingRight: 20 }]}
                                    onPress={() => { DeleteItemFromCart({ item }) }}>
                                    <AntDesign
                                        name="closecircleo"
                                        color="red"
                                        size={26} />
                                </TouchableOpacity>
                        }
                    </View>
                    <Text style={text.productTextDecription}>
                        {item.decription}
                    </Text>
                    <Text
                        style={text.productPriceMedium} >{item.price} ₽
                    </Text>
                </View>
            </View>
        </View >
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        link: PropTypes.string,
        title: PropTypes.string,
        decription: PropTypes.string,
        price: PropTypes.string,
    }),
    type: PropTypes.string,
}


export default CartItem