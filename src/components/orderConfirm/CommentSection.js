import React from 'react'
import { View, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const CommentSection = props => {
  return (
    <View>
      <View style={OrderConfirmStyles.subtitleContainer}>
        <MaterialCommunityIcons style={OrderConfirmStyles.icon} name="microphone" color="#ff9711" size={30} />
        <Text style={OrderConfirmStyles.confirmSubtitle}>Комментарий</Text>
      </View>
      <TextInput
        value={props.comment}
        style={OrderConfirmStyles.commentTextArea}
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
