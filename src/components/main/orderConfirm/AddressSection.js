import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const AddressSection = props => {
  return (
    <View>
      <View style={container.subtitleContainer}>
        <Ionicons style={images.icon} name="location-sharp" color="red" size={26} />
        <Text style={text.confirmSubtitle}>Куда</Text>
      </View>
      <Text style={text.inputLabel}>Улица*</Text>
      <TextInput
        value={props.street}
        style={inputs.input}
        onChangeText={props.setStreet}
        onBlur={props.setStateStreet}
      />
      <Text style={text.inputLabel}>Дом*</Text>
      <TextInput
        value={props.home}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={props.setHome}
        onBlur={props.setStateHome}
      />
      <Text style={text.inputLabel}>Подъезд</Text>
      <TextInput
        value={props.porch}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={props.setPorch}
        onBlur={props.setStatePorch}
      />
      <Text style={text.inputLabel}>Этаж</Text>
      <TextInput
        value={props.floor}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={props.setFloor}
        onBlur={props.setStateFloor}
      />
      <Text style={text.inputLabel}>Квартира</Text>
      <TextInput
        value={props.apartment}
        style={inputs.input}
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
