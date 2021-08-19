import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
        width: '100vw',
        height: '65px',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1,
    },
    img1: {
        height: '60px',
        width: '20vw',
        maxWidth: '90px',
        resizeMode: 'contain',
    },
    img2: {
        /* height: '60px', */
        width: '80vw',
        maxWidth: '400px',
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