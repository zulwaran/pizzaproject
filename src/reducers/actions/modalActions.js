import { OPEN_MODAL, CLOSE_MODAL } from "../modal";

export const openModalAction = (payload) => ({
    type: OPEN_MODAL,
    payload
})

export const closeModalAction = () => ({
    type: CLOSE_MODAL,
})