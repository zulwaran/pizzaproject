import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={{
                    uri: 'https://makelovepizza.ru/img/v2/logo-pizza.svg',
                }}
                style={styles.img1}
            />
            <Image
                source={{
                    uri: 'https://makelovepizza.ru/img/v2/logo-makelovepizza.svg',
                }}
                style={styles.img2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffc000',
        height: '65px',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: 0,
        top: 0,
        zIndex: 1,
    },
    img1: {
        width: '20%',
        resizeMode: 'contain',
    },
    img2: {
        width: '80%',
        resizeMode: 'contain',
    },
    cart: {
        marginVertical: 5,
        height: '80%',
        width: '80%',
        opacity: 1
    }
});

export default Header