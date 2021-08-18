import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import SliderMenuItem from './SliderMenuItem';

const DATA = [
    {
        id: '1',
        type: 'trip',
        title: 'PIZZA TRIP!',
        link: 'https://makelovepizza.ru/img/v2/nav/bus.png?1',
    },
    {
        id: '2',
        title: 'Пицца',
        type: 'pizza',
        link: 'https://makelovepizza.ru/img/v2/nav/pizza.png',
    },
    {
        id: '3',
        title: 'RASTA PASTA',
        type: 'pasta',
        link: 'https://makelovepizza.ru/img/v2/nav/pasta.png',
    },
    {
        id: '4',
        title: 'Пиццамонстры',
        type: 'monster',
        link: 'https://makelovepizza.ru/img/v2/nav/pizzamonster.png',
    },
];

const SliderMenu = () => {
    return (
        <View>
            <FlatList
                style={{
                    width: '100vw', marginTop: 65
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<SliderMenuItem item={item} />)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
});

export default SliderMenu
