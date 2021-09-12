import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { CustomButtonStyles } from './CustomButtonStyles'
import { WHITE_GRAY_COLOR } from '../../../../assets/styles/common.style'

const CustomButton = props => {
  switch (props.type) {
    case 'pizza':
    case 'trip':
    case 'monster':
      return (
        <View>
          {props.isActive === true ? (
            <View style={StyleSheet.flatten([CustomButtonStyles.priceContainer, { alignItems: 'center' }])}>
              <View style={CustomButtonStyles.buttonCircleContainer}>
                <TouchableOpacity
                  style={StyleSheet.flatten([{ width: 50, height: 50 }, CustomButtonStyles.buttonCircle])}
                  onPress={() => {
                    props.addItemToCart(props.item, '25 см')
                  }}
                >
                  <Text>25см</Text>
                </TouchableOpacity>
                <Text style={CustomButtonStyles.productPriceSmall}>{props.item.smallPrice} ₽</Text>
              </View>
              <View style={CustomButtonStyles.buttonCircleContainer}>
                <TouchableOpacity
                  style={StyleSheet.flatten([{ width: 60, height: 60 }, CustomButtonStyles.buttonCircle])}
                  onPress={() => {
                    props.addItemToCart(props.item, '30 см')
                  }}
                >
                  <Text>30см</Text>
                </TouchableOpacity>
                <Text style={CustomButtonStyles.productPriceSmall}>{props.item.mediumPrice} ₽</Text>
              </View>
              <View style={CustomButtonStyles.buttonCircleContainer}>
                <TouchableOpacity
                  style={StyleSheet.flatten([{ width: 70, height: 70 }, CustomButtonStyles.buttonCircle])}
                  onPress={() => {
                    props.addItemToCart(props.item, '35 см')
                  }}
                >
                  <Text>35см</Text>
                </TouchableOpacity>
                <Text style={CustomButtonStyles.productPriceSmall}>{props.item.largePrice} ₽</Text>
              </View>
            </View>
          ) : (
            <View style={CustomButtonStyles.priceContainer}>
              <Text style={CustomButtonStyles.productPriceSmall}>
                от <Text style={CustomButtonStyles.productPriceMedium}>{props.item.smallPrice}</Text> ₽
              </Text>
              <TouchableOpacity style={CustomButtonStyles.selectButton} onPress={() => props.setIsActive(true)}>
                <Text>Выбрать</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )
    case 'pasta':
    case 'snacks':
      return (
        <View style={CustomButtonStyles.priceContainer}>
          <Text
            style={StyleSheet.flatten([
              CustomButtonStyles.productPriceMedium,
              { alignSelf: 'center', marginRight: 15 }
            ])}
          >
            {props.item.price} ₽
          </Text>
          <TouchableOpacity style={CustomButtonStyles.selectButton} onPress={() => props.addItemToCart(props.item)}>
            <Text>Добавить</Text>
          </TouchableOpacity>
        </View>
      )
    case 'CartButton':
      return (
        <TouchableOpacity
          disabled={props.totalOrderSum < 350 ? true : false}
          style={
            props.totalOrderSum < 350
              ? StyleSheet.flatten([CustomButtonStyles.cartButton, { backgroundColor: WHITE_GRAY_COLOR }])
              : CustomButtonStyles.cartButton
          }
          onPress={() => props.navigation.navigate('OrderConfirmContainer')}
        >
          {props.totalOrderSum < 350 ? (
            <Text
              style={StyleSheet.flatten([CustomButtonStyles.cartTextButton, { fontSize: 18, textAlign: 'center' }])}
            >
              Сумма заказа должна быть не менее 350 ₽
            </Text>
          ) : (
            <Text style={CustomButtonStyles.cartTextButton}>{props.totalOrderSum} ₽ Оформить заказ</Text>
          )}
        </TouchableOpacity>
      )
    case 'CreateOrderButton':
      return (
        <TouchableOpacity
          disabled={props.totalOrderSum < 350 ? true : false}
          style={
            props.totalOrderSum < 350
              ? StyleSheet.flatten([CustomButtonStyles.confirmButton, { backgroundColor: WHITE_GRAY_COLOR }])
              : CustomButtonStyles.confirmButton
          }
          onPress={() => {
            props.createOrder(props.productList)
          }}
        >
          {props.totalOrderSum < 350 ? (
            <Text
              style={StyleSheet.flatten([
                CustomButtonStyles.confirmOrderButtonText,
                { fontSize: 18, textAlign: 'center' }
              ])}
            >
              Сумма заказа должна быть не менее 350 Р
            </Text>
          ) : (
            <Text style={CustomButtonStyles.confirmOrderButtonText}>Оформить заказ →</Text>
          )}
        </TouchableOpacity>
      )
    case 'LogOutButton':
      return (
        <TouchableOpacity style={CustomButtonStyles.confirmButton} onPress={() => props.logOut()}>
          <Text style={CustomButtonStyles.exitButtonText}>Выйти из профиля</Text>
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
