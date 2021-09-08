import React from 'react'
import { View, Text } from 'react-native'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Components
import OrderConfirmSelectTime from './OrderConfirmSelectTime'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { text } from '../../../../assets/styles/text'

const TimeSection = () => {
    return (
        <View>
            <View style={container.subtitleContainer}>
                <MaterialCommunityIcons
                    style={images.icon}
                    name="clock-time-four"
                    color="#11bd0d"
                    size={26} />
                <Text style={text.confirmSubtitle}>
                    Когда
                </Text>
            </View>
            <OrderConfirmSelectTime />
        </View>
    )
}

export default TimeSection
