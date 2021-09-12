import { StyleSheet } from 'react-native'

export const HeaderStyles = StyleSheet.create({
  //Container
  headerContainer: {
    flexDirection: 'row',
    height: '80%'
  },

  //Images
  headerLogo: {
    width: '20%',
    marginRight: 30,
    resizeMode: 'contain'
  },
  headerTitle: {
    width: '70%',
    resizeMode: 'contain'
  }
})
