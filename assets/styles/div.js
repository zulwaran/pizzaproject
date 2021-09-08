import { StyleSheet } from 'react-native';

export const div = StyleSheet.create({
    productInfo: {
        flexDirection: 'row',
    },
    productInfoRightHalf: {
        width: '50%',
    },
    OrderListLeftSide: {
        width: '60%',
        marginRight: 10
    },
    OrderListRightSide: {
        width: '40%',
        alignItems: 'flex-end'
    },
    OrderListInfoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    sliderItem: {
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalView: {
        maxHeight: "50%",
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});