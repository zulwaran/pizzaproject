import { combineReducers } from "redux";
import cart from "./cart";
import menu from "./menu"

const Reducers = combineReducers({
    menu: menu,
    cart: cart
})

export default Reducers