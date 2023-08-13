import { StyleSheet, Text, View, BackHandler, Button } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

async function sendData(name, number, pincode) {
    const response = await fetch('https://appbackend-kjrf.onrender.com/guest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            "name": name,
            "number": number,
            "pincode": pincode,
            "key": '18bc8b13c1958ece155ba87ba131bb834cb2764982a034d682f328ee8cd2d00a'
        }),
    })
}

const CodeScreen = ({ route, navigation }) => {
    let OTP = route.params.otp.toString()
    sendData(route.params.name.toString(), route.params.number, route.params.otp)
    return (
        <View style={styles.qr}>
            <QRCode
                value={OTP}
                size={350}
                backgroundColor='transparent'

            />
            <Text style={styles.desc}>Or If The QR Code Isn't Working</Text>
            <Text style={styles.code}>{route.params.otp}</Text>
        </View>

    )
}

export default CodeScreen

const styles = StyleSheet.create({
    qr: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 125,
    },
    desc: {
        marginTop: 100,
        fontSize: 20,
        fontStyle: 'italic'
    }, code: {
        marginTop: 25,
        fontSize: 50,
    }
})
{/* <Button

onPress={() => { navigation.pop() }}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/> */}