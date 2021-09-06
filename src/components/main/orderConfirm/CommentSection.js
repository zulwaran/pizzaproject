import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
import { SET_COMMENT } from '../../../reducers/order';
const CommentSection = () => {
    const dispatch = useDispatch();
    const setComment = (item) => {
        dispatch({ type: SET_COMMENT, payload: item })
    }
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="microphone"
                    color="#ff9711"
                    size={30} />
                <Text style={styles.confirmSubtitle}>Комментарий</Text>
            </View>
            <TextInput
                onChangeText={setComment}
                style={styles.commentTextArea}
                numberOfLines={4}
                multiline
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    confirmSubtitle: {
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
    },
    icon: {
        paddingTop: 5,
        marginRight: 5,
    },
    commentTextArea: {
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },
});

export default CommentSection
