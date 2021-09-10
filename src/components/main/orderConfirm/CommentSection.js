import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { useDispatch } from 'react-redux'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Reducers
import { SET_COMMENT } from '../../../reducers/order'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const CommentSection = () => {
  const dispatch = useDispatch()
  const setComment = item => {
    dispatch({ type: SET_COMMENT, payload: item })
  }
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="microphone" color="#ff9711" size={30} />
        <Text style={text.confirmSubtitle}>Комментарий</Text>
      </View>
      <TextInput onChangeText={setComment} style={inputs.commentTextArea} numberOfLines={4} multiline />
    </View>
  )
}

export default CommentSection
