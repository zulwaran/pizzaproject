import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const AddressSection = props => {
  return (
    <View>
      <View style={OrderConfirmStyles.subtitleContainer}>
        <Ionicons style={OrderConfirmStyles.icon} name="location-sharp" color="red" size={26} />
        <Text style={OrderConfirmStyles.confirmSubtitle}>Куда</Text>
      </View>
      <Text style={OrderConfirmStyles.inputLabel}>Улица*</Text>
      <TextInput
        value={props.street}
        style={OrderConfirmStyles.input}
        onChangeText={props.setStreet}
        onBlur={props.setStateStreet}
      />
      <Text style={OrderConfirmStyles.inputLabel}>Дом*</Text>
      <TextInput
        value={props.home}
        style={OrderConfirmStyles.input}
        keyboardType="numeric"
        onChangeText={props.setHome}
        onBlur={props.setStateHome}
      />
      <Text style={OrderConfirmStyles.inputLabel}>Подъезд</Text>
      <TextInput
        value={props.porch}
        style={OrderConfirmStyles.input}
        keyboardType="numeric"
        onChangeText={props.setPorch}
        onBlur={props.setStatePorch}
      />
      <Text style={OrderConfirmStyles.inputLabel}>Этаж</Text>
      <TextInput
        value={props.floor}
        style={OrderConfirmStyles.input}
        keyboardType="numeric"
        onChangeText={props.setFloor}
        onBlur={props.setStateFloor}
      />
      <Text style={OrderConfirmStyles.inputLabel}>Квартира</Text>
      <TextInput
        value={props.apartment}
        style={OrderConfirmStyles.input}
        keyboardType="numeric"
        onChangeText={props.setApartment}
        onBlur={props.setStateApartment}
      />
    </View>
  )
}

AddressSection.propTypes = {
  street: PropTypes.string,
  home: PropTypes.string,
  porch: PropTypes.string,
  floor: PropTypes.string,
  apartment: PropTypes.string,
  setStreet: PropTypes.func,
  setHome: PropTypes.func,
  setPorch: PropTypes.func,
  setFloor: PropTypes.func,
  setApartment: PropTypes.func,
  setStateStreet: PropTypes.func,
  setStateHome: PropTypes.func,
  setStatePorch: PropTypes.func,
  setStateFloor: PropTypes.func,
  setStateApartment: PropTypes.func
}

export default AddressSection
