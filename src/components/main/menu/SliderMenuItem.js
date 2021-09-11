import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { div } from '../../../../assets/styles/div'
import { images } from '../../../../assets/styles/images'
import { text } from '../../../../assets/styles/text'

const SliderMenuItem = props => {
  return (
    <View style={div.sliderItem}>
      <Image
        style={images.sliderImg}
        source={{
          uri: props.item.link
        }}
      />
      <Text
        style={props.item.type == props.activeType ? text.sliderTextActive : text.sliderText}
        onPress={() => {
          props.toggleItem(props.item)
        }}
      >
        {props.item.title}
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
