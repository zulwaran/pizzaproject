import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import CartItem from '../cart/CartItem'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderList = ({ item }) => {
    const [active, setActive] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => setActive(!active)}
            style={styles.container}>
            <View style={[{
                flexDirection: 'row',
                marginBottom: 20
            }]}>
                <View style={styles.leftSide}>
                    <View style={styles.infoBlock}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="clock-time-four"
                            color="#11bd0d"
                            size={24} />
                        <Text
                            style={[{
                                fontSize: 16,
                            }]}
                        >{item.deliveryDate}</Text>
                    </View>
                    <View style={styles.infoBlock}>
                        <Ionicons
                            style={styles.icon}
                            name="location-sharp"
                            color="red"
                            size={24} />
                        <Text
                            style={[{
                                fontSize: 16,
                            }]}>
                            {item.address}
                        </Text>
                    </View>
                    <Text style={[{
                        fontSize: 16,
                        marginLeft: 26
                    }]}>{item.paymentType}</Text>

                </View>
                <View style={styles.rightSide}>
                    <Text style={item.status === ('Готовим' || 'Доставляем') ? styles.statusActive : styles.status}>{item.status}</Text>
                    <Text>№ {item.id}</Text>
                </View>
            </View>

            <FlatList
                style={[{ marginBottom: 10 }]}
                data={item.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<Text>{item.title}</Text>)}
            />
            <Text
                style={[{
                    fontSize: 22
                }]}>
                Стоимость заказа: {item.cost} ₽
            </Text>
            {
                active === true ?
                    <FlatList
                        style={[{ marginBottom: 10 }]}
                        data={item.items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<CartItem item={item} />)}
                    /> : null
            }
            {
                active === true ?
                    <MaterialIcons
                        style={styles.arrowBtn}
                        name="arrow-drop-up"
                        color="#000"
                        size={24} />
                    :
                    <MaterialIcons
                        style={styles.arrowBtn}
                        name="arrow-drop-down"
                        color="#000"
                        size={24} />
            }
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#ffc000',
        borderRadius: 25,
        borderWidth: 3,
        marginBottom: 20,
        marginHorizontal: 10,
        padding: 15,
    },
    infoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    leftSide: {
        width: '60%',
        marginRight: 10
    },
    rightSide: {
        width: '40%',
        alignItems: 'flex-end'
    },
    status: {
        color: 'brown',
        borderColor: 'brown',
        opacity: 0.3,
        borderRadius: 25,
        borderWidth: 1,
        fontSize: 16,
        padding: 5,
    },
    statusActive: {
        color: '#357138',
        borderColor: '#357138',
        borderRadius: 25,
        borderWidth: 1,
        fontSize: 16,
        padding: 5,
    },
    icon: {
        marginTop: 5,
        marginRight: 5
    },
    arrowBtn: {
        position: 'absolute',
        borderRadius: 50,
        left: '50%',
        bottom: -15,
        backgroundColor: '#ffc000'
    },
});

export default OrderList
