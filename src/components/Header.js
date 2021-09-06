import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://i.ibb.co/DM3xDtK/logo-pizza.png',
                }}
                style={styles.imgLogo}
            />
            <Image
                source={{
                    uri: 'https://i.ibb.co/mbB1rJg/logo-makelovepizza.png',
                }}
                style={styles.imgTitle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '80%'
    },
    imgLogo: {
        width: '20%',
        marginRight: 30,
        resizeMode: 'contain'
    },
    imgTitle: {
        width: '70%',
        resizeMode: 'contain'
    }
});

export default Header