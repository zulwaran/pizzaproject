import React from 'react'
import { Image, View } from 'react-native'

//Styles
import { HeaderStyles } from './HeaderStyles'

const Header = () => {
  return (
    <View style={HeaderStyles.headerContainer}>
      <Image
        source={{
          uri: 'https://i.ibb.co/DM3xDtK/logo-pizza.png'
        }}
        style={HeaderStyles.headerLogo}
      />
      <Image
        source={{
          uri: 'https://i.ibb.co/mbB1rJg/logo-makelovepizza.png'
        }}
        style={HeaderStyles.headerTitle}
      />
    </View>
  )
}

export default Header
