import React from 'react'
import { StyleSheet, ScrollView, TextInput, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import CartItem from './CartItem'


const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'
const OrderConfirm = () => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    const createOrder = () => {
        const order = {
            uid: 1,
            items: DATA.map((item) => {
                return {
                    title: item.title,
                    price: item.price
                }
            }),
            status: "waiting"
        }
        db.collection("orders").doc().set(order)
    }
    return (
        <ScrollView>
            <Text>Оформление заказа</Text>
            <View>
                <View>
                    <Text>
                        Куда
                    </Text>
                </View>
                <View>
                    <Text>
                        Улица
                        <TextInput />
                    </Text>
                </View>
                <View>
                    <Text>
                        Дом
                        <TextInput />
                    </Text>
                </View>
                <View>
                    <Text>
                        Подъезд
                        <TextInput />
                    </Text>
                </View>
                <View>
                    <Text>
                        Этаж
                        <TextInput />
                    </Text>
                </View>
                <View>
                    <Text>
                        Квартира
                        <TextInput />
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>
                        Когда
                    </Text>
                </View>
                <View>
                    <View>
                        <Text>
                            Как можно скорее
                        </Text>
                    </View>
                    <View>
                        <Text>
                            На точное время
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>Ваши данные</Text>
                </View>
                <View>
                    <Text>
                        Имя
                        <TextInput />
                    </Text>
                    <Text>
                        Телефон
                        <TextInput />
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Комментарий</Text>
                </View>
                <TextInput
                    numberOfLines={4}
                    multiline
                />
            </View>
            <View>
                <Text>Убедитесь в правильности выбранных товаров</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<CartItem item={item} />)}
                />
            </View>
            <View>
                <View>
                    <Text>
                        = К оплате: {totalOrderSum} Р
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>
                        Выберите вариант оплаты
                    </Text>
                </View>
                <View>
                    <Text>
                        Наличными
                    </Text>
                    <Text>
                        Картой при получении
                    </Text>
                    <Text>
                        Картой онлайн прямо сейчас!
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.card__button}
                    onPress={() => { createOrder({ DATA }) }}
                >
                    <Text style={styles.card__buttonText}>ОФОРМЛЯЕМ!!!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: '20px',
        flexDirection: 'row',
        marginBottom: '20px',
        marginHorizontal: '20px',
        height: 300,
        borderBottomColor: 'rgba(157, 141, 143, 0.15)',
        borderBottomWidth: 2,
    },
    card__halfBlock: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    card__img: {
        height: '100%',
        resizeMode: 'contain',
    },
    card__title: {
        fontWeight: 600,
        fontSize: largeSize,
    },
    card__decription: {
        fontSize: mediumSize,
        marginBottom: 10
    },
    card__price: {
        fontSize: mediumSize,
        marginRight: 20,
    },
    card__order: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    card__button: {
        alignItems: "center",
        backgroundColor: "#fff",
        border: "5px solid #ffc000",
        borderRadius: 30,
        paddingVertical: '1vh',
        paddingHorizontal: '3vw',
        placeSelf: 'center',
    },
    card__buttonText: {
        fontWeight: 600,
        fontSize: mediumSize,
    },
});

export default OrderConfirm
