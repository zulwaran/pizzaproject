import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width
export const PRIMARY_COLOR = "#ffc000"
export const FONT_SIZE_SMALL = 16
export const FONT_SIZE_MEDIUM = 20
export const FONT_SIZE_LARGE = 22
export const FONT_SIZE_EXTRALARGE = 32

export default StyleSheet.create({
    button: {
        borderRadius: 30,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
    },
    yellowBorderButton: {
        borderColor: PRIMARY_COLOR,
        borderStyle: "solid",
        borderWidth: 5,
    },
    input: {
        fontSize: FONT_SIZE_SMALL,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 1,
    },
});