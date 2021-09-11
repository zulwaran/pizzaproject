import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Components
import OrderConfirmSelectTime from './OrderConfirmSelectTime'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { text } from '../../../../assets/styles/text'

const TimeSection = props => {
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="clock-time-four" color="#11bd0d" size={26} />
        <Text style={text.confirmSubtitle}>Когда</Text>
      </View>
      <OrderConfirmSelectTime
        deliveryType={props.deliveryType}
        deliveryDay={props.deliveryDay}
        deliveryTime={props.deliveryTime}
        toggleModal={props.toggleModal}
        toggleDeliveryType={props.toggleDeliveryType}
      />
    </View>
  )
}

TimeSection.propTypes = {
  deliveryType: PropTypes.string,
  deliveryDay: PropTypes.string,
  deliveryTime: PropTypes.string,
  toggleModal: PropTypes.func,
  toggleDeliveryType: PropTypes.func
}

export default TimeSection
