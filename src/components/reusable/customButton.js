import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

//Styles
import { text } from '../../../assets/styles/text'
import { buttons } from '../../../assets/styles/buttons'
import { container } from '../../../assets/styles/container'

const CustomButton = (props) => {
    switch (props.item.type) {
        case "pizza":
        case "trip":
        case "monster":
            return (
                <View>
                    {
                        props.active === 'selected' ?
                            <View style={[container.priceContainer, { alignItems: 'center' }]}>
                                <View style={container.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 50, height: 50 }, buttons.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "25 см") }}>
                                        <Text>25см</Text>
                                    </TouchableOpacity>
                                    <Text style={text.productPriceSmall}>
                                        {props.item.smallPrice} ₽
                                    </Text>
                                </View>
                                <View style={container.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 60, height: 60 }, buttons.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "30 см") }}>
                                        <Text>30см</Text>
                                    </TouchableOpacity>
                                    <Text style={text.productPriceSmall}>
                                        {props.item.mediumPrice} ₽
                                    </Text>
                                </View>
                                <View style={container.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 70, height: 70 }, buttons.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "35 см") }}>
                                        <Text>35см</Text>
                                    </TouchableOpacity>
                                    <Text style={text.productPriceSmall}>
                                        {props.item.largePrice} ₽
                                    </Text>
                                </View>
                            </View>
                            : <View style={container.priceContainer}>
                                <Text style={text.productPriceSmall}>от <Text
                                    style={text.productPriceMedium} >{props.item.smallPrice}
                                </Text> ₽
                                </Text>
                                <TouchableOpacity
                                    style={buttons.select__button}
                                    onPress={() => props.toggleActive("selected")}>
                                    <Text>Выбрать</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            )
        case 'pasta':
        case 'snacks':
            return (
                <View style={container.priceContainer}>
                    <Text style={[text.productPriceMedium, { alignSelf: 'center', marginRight: 15 }]} >
                        {props.item.price} ₽
                    </Text>
                    <TouchableOpacity
                        style={buttons.select__button}
                        onPress={() => props.addItemToCart(props.item)}>
                        <Text>Добавить</Text>
                    </TouchableOpacity>
                </View>
            )
        default:
            return null
    }
}
export default CustomButton