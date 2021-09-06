import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import OrderConfirmSelectTime from './OrderConfirmSelectTime'

const TimeSection = () => {
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="clock-time-four"
                    color="#11bd0d"
                    size={26} />
                <Text style={styles.confirmSubtitle}>
                    Когда
                </Text>
            </View>
            <OrderConfirmSelectTime />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    confirmSubtitle: {
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
    },
    icon: {
        paddingTop: 5,
        marginRight: 5,
    },
});

export default TimeSection
