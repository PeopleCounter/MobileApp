import { StyleSheet, Text, View, BackHandler, Button } from 'react-native'
import React from 'react'


const CodeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>CodeScreen</Text>
            <Text>CodeScreen</Text>
            <Button
                onPress={() => { navigation.pop() }}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default CodeScreen

const styles = StyleSheet.create({})