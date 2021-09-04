import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ModalItems from './ModalItems'
const ModalPopUp = () => {
    const modalType = useSelector(state => state.modal.modalType)
    const visibleModal = useSelector(state => state.modal.visibleModal)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }
    const dispatch = useDispatch();
    const fetchDate = () => {
        let date = new Date();
        let day = date.getDate()
        let dayTommorow = date.getDate() + 1
        let dayAfterTommorow = date.getDate() + 2
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (day < 10) {
            day = "0" + day
        }
        if (dayTommorow < 10) {
            dayTommorow = "0" + dayTommorow
        }
        if (dayAfterTommorow < 10) {
            dayAfterTommorow = "0" + dayAfterTommorow
        }
        if (month <= 10) {
            month = "0" + month
        }
        let today = 'Сегодня, на точное время'
        let tommorow = year + "-" + month + "-" + dayTommorow
        let afterTommorow = year + "-" + month + "-" + dayAfterTommorow

        return [today, tommorow, afterTommorow]
    }

    const fetchTime = () => {
        let date = new Date();
        let minuts = ''
        let time = ''
        let timeArray = []
        if (deliveryDay === "Сегодня") {
            let ost = date.getMinutes() % 10
            date.setHours(date.getHours() + 1)
            switch (ost) {
                case 1:
                    date.setMinutes(date.getMinutes() + 9)
                    break;
                case 2:
                    date.setMinutes(date.getMinutes() + 8)
                    break;
                case 3:
                    date.setMinutes(date.getMinutes() + 7)
                    break;
                case 4:
                    date.setMinutes(date.getMinutes() + 6)
                    break;
                case 5:
                    date.setMinutes(date.getMinutes() + 5)
                    break;
                case 6:
                    date.setMinutes(date.getMinutes() + 9)
                    break;
                case 7:
                    date.setMinutes(date.getMinutes() + 8)
                    break;
                case 8:
                    date.setMinutes(date.getMinutes() + 7)
                    break;
                case 9:
                    date.setMinutes(date.getMinutes() + 6)
                    break;
                default:
                    date.setMinutes(date.getMinutes() + 5)
                    break;
            }
        } else {
            date.setHours(11)
            date.setMinutes(0)
        }
        while (date.getHours() !== 0) {
            minuts = date.getMinutes()
            if (minuts < 10) {
                minuts = "0" + minuts
            }
            time = date.getHours() + ":" + minuts
            timeArray.push(time)
            date.setMinutes(date.getMinutes() + 15)
        }
        return timeArray
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                        data={modalType === "date" ? fetchDate() : fetchTime()}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<ModalItems item={item} />)}
                    />
                    <Pressable
                        style={styles.button}
                        onPress={() => closeModal()}
                    >
                        <Text style={styles.buttonText}>Готово</Text>
                    </Pressable>
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalView: {
        maxHeight: "50%",
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        fontSize: 22,
        marginTop: 10,
    },
    button: {
        marginTop: 10,
        backgroundColor: "#FFC000",
        borderRadius: 25,
        paddingVertical: 10,
        width: "90%",
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: "black"
    },
})

export default ModalPopUp
