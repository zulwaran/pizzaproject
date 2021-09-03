import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const OrderConfirmAccepted = ({ route, navigation }) => {
    const { orderId } = route.params;
    const { deliveryDate } = route.params;
    return (
        <View style={[{ alignItems: 'center', flex: 1, justifyContent: 'space-around' }]}>
            <Image
                style={[{ width: 150, height: 150 }]}
                source={{
                    uri: 'https://pngimg.com/uploads/disco_ball/disco_ball_PNG2.png'
                }}
            />
            <View style={[{ alignItems: 'center', }]}>
                <Text style={[{ color: 'green', fontSize: 32, marginBottom: 10 }]}>Ваш заказ принят!</Text>
                <Text style={[{ fontSize: 16, marginBottom: 10 }]}>Мы доставим ваш заказ как можно скорее</Text>
                <Text style={[{ fontSize: 16, marginBottom: 10 }]}>Заказ № {orderId}</Text>
            </View>

            <TouchableOpacity style={[{
                borderColor: '#ff9711',
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 50,
                paddingHorizontal: 60,
                paddingVertical: 10,
            }]}
                onPress={() => navigation.navigate("OrderListScreen")}>
                <Text style={[{ fontSize: 16 }]}>Проверить статус заказа</Text>
            </TouchableOpacity>
            <Text style={[{
                fontSize: 16,
                textAlign: 'center',
                paddingHorizontal: 20,
            }]}>
                Если хотите изменить или отменить заказ, скорее звоните 999-999
            </Text>
        </View>
    )
}

export default OrderConfirmAccepted
