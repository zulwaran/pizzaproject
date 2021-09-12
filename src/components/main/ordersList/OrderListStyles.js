import { StyleSheet } from 'react-native'
import {
  PRIMARY_COLOR,
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  GREEN_COLOR,
  BLACK_COLOR
} from '../../../../assets/styles/common.style'

export const OrderListStyles = StyleSheet.create({
  //Container
  orderListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  orderListItemContainer: {
    borderColor: PRIMARY_COLOR,
    borderRadius: 25,
    borderWidth: 3,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 15
  },
  orderListLeftSide: {
    width: '60%',
    marginRight: 10
  },
  orderListRightSide: {
    width: '40%',
    alignItems: 'flex-end'
  },
  orderListInfoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },

  //Text
  orderStatusActive: {
    color: GREEN_COLOR,
    borderColor: GREEN_COLOR,
    borderRadius: 25,
    borderWidth: 1,
    fontSize: FONT_SIZE_SMALL,
    padding: 5
  },
  orderStatus: {
    color: 'brown',
    borderColor: 'brown',
    opacity: 0.3,
    borderRadius: 25,
    borderWidth: 1,
    fontSize: FONT_SIZE_SMALL,
    padding: 5
  },
  orderListMenu: {
    fontSize: FONT_SIZE_MEDIUM,
    padding: 10,
    opacity: 0.3
  },
  orderListMenuActive: {
    fontSize: FONT_SIZE_MEDIUM,
    borderBottomColor: PRIMARY_COLOR,
    padding: 10,
    borderBottomWidth: 1
  },
  textSmall: {
    fontSize: FONT_SIZE_SMALL,
    color: BLACK_COLOR
  },
  textLarge: {
    fontSize: FONT_SIZE_LARGE,
    color: BLACK_COLOR
  },

  //Buttons
  arrowButton: {
    position: 'absolute',
    borderRadius: 50,
    left: '50%',
    bottom: -15,
    backgroundColor: PRIMARY_COLOR
  },

  //Images
  icon: {
    paddingTop: 5,
    marginRight: 5
  }
})
