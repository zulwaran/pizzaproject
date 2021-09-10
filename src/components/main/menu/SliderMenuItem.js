import React from 'react'
import { View, Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

//Reducers
import { TOGGLE_MENU } from '../../../reducers/menu'

//Styles
import { div } from '../../../../assets/styles/div'
import { images } from '../../../../assets/styles/images'
import { text } from '../../../../assets/styles/text'

const SliderMenuItem = ({ item }) => {
  const dispatch = useDispatch()
  const activeType = useSelector(state => state.menu.activeType)
  const toggleItem = item => {
    dispatch({ type: TOGGLE_MENU, payload: item.item.type })
  }

  return (
    <View style={div.sliderItem}>
      <Image
        style={images.sliderImg}
        source={{
          uri: item.link
        }}
      />
      <Text
        style={item.type == activeType ? text.sliderTextActive : text.sliderText}
        onPress={() => {
          toggleItem({ item })
        }}
      >
        {item.title}
      </Text>
    </View>
  )
}

SliderMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
  })
}

export default SliderMenuItem
