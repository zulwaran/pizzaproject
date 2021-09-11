import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Components
import CustomButton from '../../reusable/CustomButton'

//Styles
import { text } from '../../../../assets/styles/text'
import { div } from '../../../../assets/styles/div'
import { images } from '../../../../assets/styles/images'
import { container } from '../../../../assets/styles/container'

const ProductListItem = props => {
  const [isActive, setIsActive] = useState(false)

  if (props.item.type === props.productType) {
    return (
      <View style={container.productContainer}>
        <View style={div.productInfo}>
          <Image
            style={images.productInfoImage}
            source={{
              uri: props.item.link
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
              <Text style={text.productTextTitle}>{props.item.title}</Text>
              {isActive === true ? (
                <TouchableOpacity style={[{ paddingRight: 20 }]} onPress={() => setIsActive(false)}>
                  <AntDesign name="closecircleo" color="red" size={26} />
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={text.productTextDecription}>{props.item.decription}</Text>
          </View>
        </View>
        <CustomButton
          type={props.item.type}
          item={props.item}
          setIsActive={setIsActive}
          isActive={isActive}
          addItemToCart={props.addItemToCart}
        />
      </View>
    )
  } else {
    return null
  }
}

ProductListItem.propTypes = {
  productType: PropTypes.string,
  addItemToCart: PropTypes.func,
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
