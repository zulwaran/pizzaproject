import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Reducers
import { SET_APARTMENT, SET_FLOOR, SET_HOME, SET_PORCH, SET_STREET } from '../../../reducers/order'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const AddressSection = () => {
  const dispatch = useDispatch()

  const [street, setStreet] = useState(useSelector(state => state.order.street))
  const [home, setHome] = useState(useSelector(state => state.order.home))
  const [apartment, setApartment] = useState(useSelector(state => state.order.apartment))
  const [porch, setPorch] = useState(useSelector(state => state.order.porch))
  const [floor, setFloor] = useState(useSelector(state => state.order.floor))

  const writeStreet = () => {
    dispatch({ type: SET_STREET, payload: street })
  }
  const writeHome = () => {
    dispatch({ type: SET_HOME, payload: home })
  }
  const writeApartment = () => {
    dispatch({ type: SET_APARTMENT, payload: apartment })
  }
  const writePorch = () => {
    dispatch({ type: SET_PORCH, payload: porch })
  }
  const writeFloor = () => {
    dispatch({ type: SET_FLOOR, payload: floor })
  }

  return (
    <View>
      <View style={container.subtitleContainer}>
        <Ionicons style={images.icon} name="location-sharp" color="red" size={26} />
        <Text style={text.confirmSubtitle}>Куда</Text>
      </View>
      <Text style={text.inputLabel}>Улица*</Text>
      <TextInput value={street} style={inputs.input} onChangeText={setStreet} onBlur={writeStreet} />
      <Text style={text.inputLabel}>Дом*</Text>
      <TextInput value={home} style={inputs.input} keyboardType="numeric" onChangeText={setHome} onBlur={writeHome} />
      <Text style={text.inputLabel}>Подъезд</Text>
      <TextInput
        value={porch}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={setPorch}
        onBlur={writePorch}
      />
      <Text style={text.inputLabel}>Этаж</Text>
      <TextInput
        value={floor}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={setFloor}
        onBlur={writeFloor}
      />
      <Text style={text.inputLabel}>Квартира</Text>
      <TextInput
        value={apartment}
        style={inputs.input}
        keyboardType="numeric"
        onChangeText={setApartment}
        onBlur={writeApartment}
      />
    </View>
  )
}

export default AddressSection
