import React from 'react';
import { Image, View } from 'react-native';

//Styles
import { container } from '../../assets/styles/container';
import { images } from '../../assets/styles/images';

const Header = () => {
    return (
        <View style={container.headerContainer}>
            <Image
                source={{
                    uri: 'https://i.ibb.co/DM3xDtK/logo-pizza.png',
                }}
                style={images.headerLogo}
            />
            <Image
                source={{
                    uri: 'https://i.ibb.co/mbB1rJg/logo-makelovepizza.png',
                }}
                style={images.headerTitle}
            />
        </View>
    );
}

export default Header