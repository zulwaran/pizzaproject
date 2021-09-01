import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Header = () => {
    return (
        <View style={[{ flexDirection: 'row', height: '80%' }]}>
            <Image
                source={{
                    uri: 'https://i.ibb.co/DM3xDtK/logo-pizza.png',
                }}
                style={[{
                    width: '20%',
                    marginRight: 30,
                    resizeMode: 'contain'
                }]}
            />
            <Image
                source={{
                    uri: 'https://i.ibb.co/mbB1rJg/logo-makelovepizza.png',
                }}
                style={[{
                    width: '70%',
                    resizeMode: 'contain'
                }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
});

export default Header