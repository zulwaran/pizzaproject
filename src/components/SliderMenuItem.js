import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const largeSize = 'calc(18px + 16*(100vw / 1680))'

const SliderMenuItem = ({ item }) => {

    const dispatch = useDispatch();
    const activeType = useSelector(state => state.menu.activeType);

    const toggleItem = (item) => {
        dispatch({ type: "TOGGLE_MENU", payload: item.item.type })
    }

    return (
        <View style={styles.item}>
            <Image
                style={styles.item__img}
                source={{
                    uri: item.link,
                }}
            />
            <Text style={item.type == activeType ? styles.item__textActive : styles.item__text}
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
