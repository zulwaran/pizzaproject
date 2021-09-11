import React from 'react'
import { View, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const CommentSection = props => {
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="microphone" color="#ff9711" size={30} />
        <Text style={text.confirmSubtitle}>Комментарий</Text>
      </View>
      <TextInput
        value={props.comment}
        style={inputs.commentTextArea}
        numberOfLines={4}
        multiline
        onChangeText={props.setComment}
        onBlur={props.setStateComment}
      />
    </View>
  )
}

CommentSection.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func,
  setStateComment: PropTypes.func
}

export default CommentSection
