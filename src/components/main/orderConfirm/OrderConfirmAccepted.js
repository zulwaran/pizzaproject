import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

const OrderConfirmAccepted = ({ route, navigation }) => {
    const { orderId } = route.params;
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://pngimg.com/uploads/disco_ball/disco_ball_PNG2.png'
                }}
            />
            <View style={[{ alignItems: 'center', }]}>
                <Text style={styles.largeText}>
                    Ваш заказ принят!
                </Text>
                {
                    deliveryType === 'Ближайшее' ?
                        <Text style={styles.mediumText}>
                            Мы доставим ваш заказ как можно скорее
                        </Text>
                        :
                        <Text style={styles.mediumText}>
                            Мы доставим ваш заказ {deliveryDay} к {deliveryTime}
                        </Text>
                }
                <Text style={styles.mediumText}>
                    Заказ № {orderId}
                </Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("OrderListScreen")}>
                <Text style={[{ fontSize: 16 }]}>
                    Проверить статус заказа
                </Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>
                Если хотите изменить или отменить заказ, скорее звоните 999-999
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        width: 150,
        height: 150
    },
    largeText: {
        color: 'green',
        fontSize: 32,
        marginBottom: 10
    },
    mediumText: {
        fontSize: 16,
        marginBottom: 10
    },
    bottomText: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        borderColor: '#ff9711',
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 50,
        paddingHorizontal: 60,
        paddingVertical: 10,
    },
})
export default OrderConfirmAccepted
