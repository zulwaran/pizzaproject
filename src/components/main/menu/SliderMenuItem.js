import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { MenuScreenStyles } from './MenuScreenStyles'

const SliderMenuItem = props => {
  return (
    <View style={MenuScreenStyles.sliderItem}>
      <Image
        style={MenuScreenStyles.sliderImg}
        source={{
          uri: props.item.link
        }}
      />
      <Text
        style={props.item.type == props.activeType ? MenuScreenStyles.sliderTextActive : MenuScreenStyles.sliderText}
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
