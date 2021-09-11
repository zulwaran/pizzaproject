import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { text } from '../../../assets/styles/text'
import { buttons } from '../../../assets/styles/buttons'
import { container } from '../../../assets/styles/container'

const CustomButton = props => {
  switch (props.type) {
    case 'pizza':
    case 'trip':
    case 'monster':
      return (
        <View>
          {props.isActive === true ? (
            <View style={[container.priceContainer, { alignItems: 'center' }]}>
              <View style={container.buttonCircleContainer}>
                <TouchableOpacity
                  style={[{ width: 50, height: 50 }, buttons.buttonCircle]}
                  onPress={() => {
                    props.addItemToCart(props.item, '25 см')
                  }}
                >
                  <Text>25см</Text>
                </TouchableOpacity>
                <Text style={text.productPriceSmall}>{props.item.smallPrice} ₽</Text>
              </View>
              <View style={container.buttonCircleContainer}>
                <TouchableOpacity
                  style={[{ width: 60, height: 60 }, buttons.buttonCircle]}
                  onPress={() => {
                    props.addItemToCart(props.item, '30 см')
                  }}
                >
                  <Text>30см</Text>
                </TouchableOpacity>
                <Text style={text.productPriceSmall}>{props.item.mediumPrice} ₽</Text>
              </View>
              <View style={container.buttonCircleContainer}>
                <TouchableOpacity
                  style={[{ width: 70, height: 70 }, buttons.buttonCircle]}
                  onPress={() => {
                    props.addItemToCart(props.item, '35 см')
                  }}
                >
                  <Text>35см</Text>
                </TouchableOpacity>
                <Text style={text.productPriceSmall}>{props.item.largePrice} ₽</Text>
              </View>
            </View>
          ) : (
            <View style={container.priceContainer}>
              <Text style={text.productPriceSmall}>
                от <Text style={text.productPriceMedium}>{props.item.smallPrice}</Text> ₽
              </Text>
              <TouchableOpacity style={buttons.select__button} onPress={() => props.setIsActive(true)}>
                <Text>Выбрать</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )
    case 'pasta':
    case 'snacks':
      return (
        <View style={container.priceContainer}>
          <Text style={[text.productPriceMedium, { alignSelf: 'center', marginRight: 15 }]}>{props.item.price} ₽</Text>
          <TouchableOpacity style={buttons.select__button} onPress={() => props.addItemToCart(props.item)}>
            <Text>Добавить</Text>
          </TouchableOpacity>
        </View>
      )
    case 'CartButton':
      return (
        <TouchableOpacity
          disabled={props.totalOrderSum < 350 ? true : false}
          style={
            props.totalOrderSum < 350 ? [buttons.cart__button, { backgroundColor: '#767976' }] : buttons.cart__button
          }
          onPress={() => props.navigation.navigate('OrderConfirmContainer')}
        >
          {props.totalOrderSum < 350 ? (
            <Text style={[text.cartTextbutton, { fontSize: 18, textAlign: 'center' }]}>
              Сумма заказа должна быть не менее 350 ₽
            </Text>
          ) : (
            <Text style={text.cartTextbutton}>{props.totalOrderSum} ₽ Оформить заказ</Text>
          )}
        </TouchableOpacity>
      )
    case 'CreateOrderButton':
      return (
        <TouchableOpacity
          disabled={props.totalOrderSum < 350 ? true : false}
          style={
            props.totalOrderSum < 350
              ? [buttons.confirm__button, { backgroundColor: '#767976' }]
              : buttons.confirm__button
          }
          onPress={() => {
            props.createOrder(props.productList)
          }}
        >
          {props.totalOrderSum < 350 ? (
            <Text style={(text.confirmOrderButtonText, [{ fontSize: 18, textAlign: 'center' }])}>
              Сумма заказа должна быть не менее 350 Р
            </Text>
          ) : (
            <Text style={text.confirmOrderButtonText}>Оформить заказ →</Text>
          )}
        </TouchableOpacity>
      )
    case 'LogOutButton':
      return (
        <TouchableOpacity style={buttons.confirm__button} onPress={() => props.logOut()}>
          <Text style={text.exitButtonText}>Выйти из профиля</Text>
        </TouchableOpacity>
      )
    default:
      return null
  }
}
CustomButton.propTypes = {
  navigation: PropTypes.object,
  totalOrderSum: PropTypes.number,
  isActive: PropTypes.bool,
  addItemToCart: PropTypes.func,
  toggleActive: PropTypes.func,
  item: PropTypes.shape({
    decription: PropTypes.string,
    id: PropTypes.string,
    largePrice: PropTypes.string,
    link: PropTypes.string,
    mediumPrice: PropTypes.string,
    smallPrice: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
  })
}
export default CustomButton
