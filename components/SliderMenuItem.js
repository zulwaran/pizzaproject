import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const largeSize = 'calc(18px + 16*(100vw / 1680))'
const SliderMenuItem = ({ item, active, toggleItem }) => {
    return (
        <View style={styles.item}>
            <Image
                style={styles.item__img}
                source={{
                    uri: item.link,
                }}
            />
            <Text style={item.id == active ? styles.item__textActive : styles.item__text}
                onPress={() => { toggleItem({ item }) }}>
                {item.title}
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    item: {
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item__img: {
        height: '100px',
        width: '100px',
        resizeMode: 'contain',
        marginRight: 10,
    },
    item__text: {
        fontSize: largeSize,
        fontWeight: '600',
    },
    item__textActive: {
        fontSize: largeSize,
        fontWeight: '600',
        color: '#FFC000'
    }

});

export default SliderMenuItem
