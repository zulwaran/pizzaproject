import { combineReducers } from "redux";
import cart from "./cart";
import menu from "./menu"
import modal from "./modal";
import order from "./order"
import user from "./user"

const Reducers = combineReducers({
    menu: menu,
    cart: cart,
    order: order,
    user: user,
    modal: modal
})

export default Reducers