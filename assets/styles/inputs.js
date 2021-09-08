import { StyleSheet } from 'react-native';
import common from './common.style'

export const inputs = StyleSheet.create({
    input: {
        ...common.input,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    commentTextArea: {
        ...common.input,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    inptTime: {
        ...common.input,
        color: "black",
        marginLeft: 10,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "30%",
        textAlign: 'center'
    },
});