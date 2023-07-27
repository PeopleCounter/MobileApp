import { TouchableOpacity, StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    preprocess = () => {
        if (text == '' || number == null) {
            Alert.alert('Error', 'Please Fill The Fields', [
                {
                    text: 'OK'
                },
            ]);
        } else {
            const otp = Math.floor(Math.random() * 9000) + 1000;
            navigation.navigate('CodeScreen', { name: text, number: number, otp: otp })
        }
    }
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <Image style={styles.image} source={require('../assets/kjsce.png')} />
            <Text style={styles.description}>For any queries contact support@somaiya.edu</Text>
            <Text style={styles.title}>OTP Generator</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Enter Your Name"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Your Number"
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity
                onPress={() => { preprocess() }}
                style={styles.opacity}
            >
                <Text style={styles.generate}>Generate OTP</Text>
            </TouchableOpacity>
            <View style={styles.upper}>
                <View style={styles.div11} >
                    <Text>©2023KJSCE</Text>
                </View>
                <View style={styles.div12} />
            </View>
            <View style={styles.lower}>
                <View style={styles.div21} />
                <View style={styles.div22} />
            </View>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
        paddingTop: 250,
        width: 250,
        marginLeft: -20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    description: {
        marginTop: -50,
        color: '#2f4f4f',
        paddingLeft: 8,
        paddingRight: 5,
        fontSize: 18,
        fontStyle: 'italic'
    },
    title: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 40,
    },
    form: {
        backgroundColor: '#e7e8e9',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    input: {
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 25,
        padding: 15,
        margin: 10,
        borderColor: 'black'
    },
    opacity: {
        marginTop: 25,
        display: 'flex',
        padding: 25,
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 15,
        backgroundColor: '#b7202e'
    },
    generate: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    upper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        height: 100,
    },
    div11: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
    },
    div12: {
        flex: 1,
        backgroundColor: '#b7202e'
    },
    lower: {
        height: 100,
        display: 'flex',
        flexDirection: 'row'
    },
    div21: {
        flex: 2,
        backgroundColor: '#ed1c24'
    },
    div22: {
        flex: 8,
        backgroundColor: '#b7202e'
    },
})