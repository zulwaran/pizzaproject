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
        maxWidth: '90px',
        width: '20vw',
        resizeMode: 'contain',
    },
    img2: {
        height: '60px',
        maxWidth: '400px',
        width: '80vw',
        resizeMode: 'contain',
    },
});

export default Header