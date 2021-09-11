import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Reducer & Functions
import { ADD_TO_CART } from '../../../reducers/cart'
import { AddItemToCart } from '../../../functions/Constructors'

//Components
import CustomButton from '../../reusable/customButton'

//Styles
import { text } from '../../../../assets/styles/text'
import { div } from '../../../../assets/styles/div'
import { images } from '../../../../assets/styles/images'
import { container } from '../../../../assets/styles/container'

const ProductListItem = ({ item }) => {
  const type = useSelector(state => state.menu.activeType)
  const [active, setActive] = useState('')
  const dispatch = useDispatch()

  const toggleActive = () => {
    setActive('selected')
  }

  const addItemToCart = async (item, size) => {
    let price = ''
    let productSize = size
    switch (size) {
      case '25 см':
        price = item.smallPrice
        break
      case '30 см':
        price = item.mediumPrice
        break
      case '35 см':
        price = item.largePrice
        break
      default:
        price = item.price
        productSize = ''
        break
    }
    let newItem = new AddItemToCart(item.title, productSize, item.decription, item.link, price)
    dispatch({ type: ADD_TO_CART, payload: newItem })
  }

  if (item.type === type) {
    return (
      <View style={container.productContainer}>
        <View style={div.productInfo}>
          <Image
            style={images.productInfoImage}
            source={{
              uri: item.link
            }}
          />
          <View style={div.productInfoRightHalf}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }
              ]}
            >
              <Text style={text.productTextTitle}>{item.title}</Text>
              {active === 'selected' ? (
                <TouchableOpacity style={[{ paddingRight: 20 }]} onPress={() => setActive('')}>
                  <AntDesign name="closecircleo" color="red" size={26} />
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={text.productTextDecription}>{item.decription}</Text>
          </View>
        </View>
        <CustomButton
          type={item.type}
          item={item}
          toggleActive={toggleActive}
          active={active}
          addItemToCart={addItemToCart}
        />
      </View>
    )
  } else {
    return null
  }
}

ProductListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    largePrice: PropTypes.string,
    link: PropTypes.string,
    mediumPrice: PropTypes.string,
    smallPrice: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string
  })
}

export default ProductListItem
