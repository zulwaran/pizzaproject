import { StyleSheet } from 'react-native';
import common, { PRIMARY_COLOR } from './common.style'

export const buttons = StyleSheet.create({
    radioButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    arrowButton: {
        position: 'absolute',
        borderRadius: 50,
        left: '50%',
        bottom: -15,
        backgroundColor: PRIMARY_COLOR,
    },
    select__button: {
        ...common.yellowBorderButton,
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 10,
    },
    buttonCircle: {
        ...common.yellowBorderButton,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginRight: 5,
    },
    cart__button: {
        ...common.button,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 30,
    },
    confirm__button: {
        backgroundColor: PRIMARY_COLOR,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    closeModalButton: {
        marginTop: 10,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 25,
        paddingVertical: 10,
        width: "90%",
        alignItems: 'center',
    },
    selectTimeButton: {
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 25,
        marginBottom: 10,
    },
    authButton: {
        ...common.button,
        ...common.yellowBorderButton,
        padding: 10,
        marginTop: 10,
    },
    redirectingButton: {
        ...common.yellowBorderButton,
        borderWidth: 2,
        borderRadius: 50,
        paddingHorizontal: 60,
        paddingVertical: 10,
    },
});