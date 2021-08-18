import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'

const ProductListItem = ({ item }) => {
    const type = useSelector(state => state.menu.activeType);

    if (item.type === type) {
        return (
            <View style={styles.card}>
                <View style={styles.card__halfBlock}>
                    <Image
                        style={styles.card__img}
                        source={{
                            uri: item.link,
                        }}
                    />
                </View>
                <View style={styles.card__halfBlock}>
                    <Text
                        style={styles.card__title}>
                        {item.title}
                    </Text>
                    <Text
                        style={styles.card__decription}>
                        {item.decription}
                    </Text>
                    <View style={styles.card__order}>
                        <Text style={styles.card__price}>от <Text style={styles.card__title}>{item.minPrice}
                        </Text> ₽
                        </Text>
                        <TouchableOpacity style={styles.card__button}>
                            <Text style={styles.card__buttonText}>Выбрать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    } else {
        return (null)
    }
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

export default ProductListItem