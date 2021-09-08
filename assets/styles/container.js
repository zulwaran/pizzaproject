import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from './common.style';

export const container = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: '80%'
    },
    authContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    cartContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    OrderListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    OrderListItemContainer: {
        borderColor: PRIMARY_COLOR,
        borderRadius: 25,
        borderWidth: 3,
        marginBottom: 20,
        marginHorizontal: 10,
        padding: 15,
    },
    productContainer: {
        marginBottom: 30,
        marginRight: 10,
        borderBottomColor: 'rgba(157, 141, 143, 0.15)',
        borderBottomWidth: 2,
        backgroundColor: "#fff",
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    buttonCircleContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    orderAcceptedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});