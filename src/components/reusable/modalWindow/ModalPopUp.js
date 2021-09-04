import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ModalItems from './ModalItems'
import { fetchDate, fetchTime } from '../../globalFunctions'
const ModalPopUp = () => {
    const modalType = useSelector(state => state.modal.modalType)
    const visibleModal = useSelector(state => state.modal.visibleModal)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }
    const dispatch = useDispatch();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                        data={modalType === "date" ? fetchDate() : fetchTime(deliveryDay)}
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
