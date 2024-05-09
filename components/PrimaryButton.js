import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = ({title, handlePress}) => {
    return (
        <TouchableOpacity 
        style={styles.button}
        onPress={handlePress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#CD853F',
        width: '40%',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})