import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

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
  const [comment, setComment] = useState(useSelector(state => state.order.comment))
  const dispatch = useDispatch()
  const writeComment = () => {
    dispatch({ type: SET_COMMENT, payload: comment })
  }
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="microphone" color="#ff9711" size={30} />
        <Text style={text.confirmSubtitle}>Комментарий</Text>
      </View>
      <TextInput
        value={comment}
        style={inputs.commentTextArea}
        numberOfLines={4}
        multiline
        onChangeText={setComment}
        onBlur={writeComment}
      />
    </View>
  )
}

export default CommentSection
